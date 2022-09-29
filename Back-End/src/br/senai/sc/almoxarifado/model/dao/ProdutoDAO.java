package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.ProdutoFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;

public class ProdutoDAO {
    private final Connection conexaoProduto;

    /**
     * Construtor da classe ProdutoDAO que ao ser instanciado já efetua conexão com o banco de dados
     */
    public ProdutoDAO() {
        this.conexaoProduto = new ConexaoFactory().conectaBD();
    }

    /**
     * Método que insere um produto na tabela PRODUTO
     * O método também insere todas as localizações do produto na tabela PRODUTO_LOCALIZACAO
     * @param produto
     */
    public void inserirProduto(Produto produto) {
        String sql = "INSERT INTO produto (nome, caracteristicas, quantidade, descartavel, imagem, anexos, classificacao_id) VALUES (?, ?, ?, ?, ?, ?, ?);";

        // Criando statement passando por parâmetro o comando sql e Statement.RETURN_GENERATED_KEYS para retornar o id do produto inserido;
        // O id do produto inserido será utilizado para poder cadastrar suas localizações na tabela intermediária produto_localizacao;
        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, produto.getNomeProduto());
            statement.setString(2, produto.getCaracteristicasProduto());
            statement.setInt(3, produto.getQuantidadeProduto());
            statement.setBoolean(4, produto.isProdutoDescartavel());
            statement.setByte(5, produto.getImagemProduto());
            statement.setString(6, produto.getAnexosProduto());
            statement.setInt(7, produto.getClassificacaoProduto().getCodigoClassificacao());
            try {
                statement.execute();

                // Obtendo o ResultSet com o id do produto inserido;
                ResultSet resultSet = statement.getGeneratedKeys();
                int idProduto = 0;
                if (resultSet.next()) {
                    // Obtendo o id do produto inserido;
                    idProduto = resultSet.getInt(1);
                }
                try {
                    // Inserindo cada localização do produto na tabela intermediária produto_localizacao;
                    ProdutoLocalizacaoDAO produtoLocalizacaoDAO = new ProdutoLocalizacaoDAO();
                    for (Localizacao localizacao : produto.getListaLocalizacoesProduto()) {
                        produtoLocalizacaoDAO.inserirProdutoLocalizacao(idProduto, localizacao.getCodigoLocalizacao());
                    }
                } catch (Exception e) {
                    throw new RuntimeException("Erro ao inserir as localizações do produto");
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que atualiza um produto na tabela PRODUTO a partir de seu ID
     * @param produto
     */
    public void editarProduto(Produto produto) {
        String sql = "UPDATE PRODUTO SET NOME = ?, CARACTERISTICAS = ?, QUANTIDADE = ?, DESCARTAVEL = ?, IMAGEM = ?, " +
                "ANEXOS = ?, CLASSIFICACAO_ID = ? WHERE ID = ?";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {
            statement.setString(1, produto.getNomeProduto());
            statement.setString(2, produto.getCaracteristicasProduto());
            statement.setInt(3, produto.getQuantidadeProduto());
            statement.setBoolean(4, produto.isProdutoDescartavel());
            statement.setByte(5, produto.getImagemProduto());
            statement.setString(6, produto.getAnexosProduto());
            statement.setInt(7, produto.getClassificacaoProduto().getCodigoClassificacao());
            statement.setInt(8, produto.getCodigoProduto());

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que exclui um produto da tabela PRODUTO a partir de seu ID
     * @param codigoProduto
     */
    public void deletarProduto(Integer codigoProduto) {
        String sql = "DELETE FROM PRODUTO WHERE ID = ?";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {
            statement.setInt(1, codigoProduto);
            try {
                statement.execute();

                try {
                    ProdutoLocalizacaoDAO produtoLocalizacaoDAO = new ProdutoLocalizacaoDAO();
                    produtoLocalizacaoDAO.deletarProdutoLocalizacaoPorProduto(codigoProduto);

                    try {
                        SacolaProdutoDAO sacolaProdutoDAO = new SacolaProdutoDAO();
                        sacolaProdutoDAO.deletarProdutoDasSacolas(codigoProduto);
                    } catch (Exception e) {
                        throw new RuntimeException("Erro ao deletar o produto das sacolas");
                    }
                } catch (Exception e) {
                    throw new RuntimeException("Erro ao deletar localizações do produto");
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que diminui a quantidade disponível em estoque de certo produto a partir de seu ID
     * @param codigoProduto
     * @param quantidadeADiminuir
     */
    public void diminuirQuantidade(Integer codigoProduto, Integer quantidadeADiminuir) {
        // No comando abaixo a quantidade é setada como a sua própria quantidade menos a quantidade passada por parâmetro
        String sql = "UPDATE PRODUTO SET QUANTIDADE = QUANTIDADE - ? WHERE ID = ?";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {
            statement.setInt(1, quantidadeADiminuir);
            statement.setInt(2, codigoProduto);
            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que busca todos produtos da tabela PRODUTO
     * @param indexInicial
     * @return lista de todos os produtos
     */
    public Collection<Produto> buscarProdutos(Integer indexInicial) {
        String sql = "SELECT * FROM produto WHERE id >= ? LIMIT 18";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {

            statement.setInt(1, indexInicial);

            try (ResultSet resultSet = statement.executeQuery()) {
                Collection<Produto> listaProdutos = new ArrayList<>();
                while (resultSet.next()) {
                    listaProdutos.add(extrairObjeto(resultSet));
                }
                return listaProdutos;

            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que busca um produto da tabela PRODUTO a partir de seu nome
     * Necessário especificar o índice inicial do qual será retornado os produtos bem como o índice final
     * @param nome
     * @param comeco
     * @param limite
     * @return lista de produtos encontrados pelo nome
     */
    public Collection<Produto> buscarProdutoPorNome(String nome, Integer comeco, Integer limite) {
        String sql = "SELECT * FROM PRODUTO WHERE NOME LIKE ? LIMIT ?, ?";
        Collection<Produto> listaProdutos = new ArrayList<>();

        try (PreparedStatement stmt = conexaoProduto.prepareStatement(sql)) {

            stmt.setString(1, "%" + nome + "%");
            stmt.setInt(2, comeco);
            stmt.setInt(3, limite);

            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet != null) {
                    while (resultSet.next()) {
                        listaProdutos.add(extrairObjeto(resultSet));
                    }
                    return listaProdutos;
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        throw new RuntimeException("Nenhum produto encontrado!");
    }

    /**
     * Método que busca os produtos de acordo com o tipo do filtro aplicado
     * @param tipoFiltro
     * @return lista de produtos com o filtro aplicado
     */
    public Collection<Produto> produtosFiltrados(Integer tipoFiltro) { // filtros da página principal ( com estoque, descartável...)
        // * tipoFiltro = 1 -> produtos descartáveis * tipoFiltro = 2 -> produtos não descartáveis * tipoFiltro = 3 -> produtos com estoque * tipoFiltro = 4 -> produtos sem estoque
        String sql = "";
        Collection<Produto> listaProdutos = new ArrayList<>();

        if (tipoFiltro == 1) {
            sql = "SELECT * FROM PRODUTO WHERE DESCARTAVEL = 1 LIMIT 18";
        } else if (tipoFiltro == 2) {
            sql = "SELECT * FROM PRODUTO WHERE DESCARTAVEL = 0 LIMIT 18";
        } else if (tipoFiltro == 3) {
            sql = "SELECT * FROM PRODUTO WHERE DESCARTAVEL > 0 LIMIT 18";
        } else if (tipoFiltro == 4) {
            sql = "SELECT * FROM PRODUTO WHERE DESCARTAVEL = 0 LIMIT 18";
        }

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet != null) {
                    while (resultSet.next()) {
                        listaProdutos.add(extrairObjeto(resultSet));
                    }
                    return listaProdutos;
                }
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        throw new RuntimeException("Nenhum produto encontrado!");
    }

    /**
     * Método que busca os produtos de acordo com o tipo da ordenação aplicada
     * @param tipoOrdenacao
     * @return lista de produtos com a ordenação aplicada
     */
    public Collection<Produto> produtosOrdenados(Integer tipoOrdenacao) { // filtros de ordenação dos produtos na página principal
        // * tipoOrdenacao = 1 -> NOME crescente * tipoOrdenacao = 2 -> NOME decrescente * tipoOrdenacao = 3 -> QUANTIDADE crescente * tipoOrdenacao = 4 -> QUANTIDADE decrescente
        String sql = "";
        Collection<Produto> listaProdutos = new ArrayList<>();

        if (tipoOrdenacao == 1) {
            sql = "SELECT * FROM PRODUTO ORDER BY NOME ASC LIMIT 18";
        } else if (tipoOrdenacao == 2) {
            sql = "SELECT * FROM PRODUTO ORDER BY NOME DESC LIMIT 18";
        } else if (tipoOrdenacao == 3) {
            sql = "SELECT * FROM PRODUTO ORDER BY QUANTIDADE ASC LIMIT 18";
        } else if (tipoOrdenacao == 4) {
            sql = "SELECT * FROM PRODUTO ORDER BY QUANTIDADE DESC LIMIT 18";
        }

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet != null) {
                    while (resultSet.next()) {
                        listaProdutos.add(extrairObjeto(resultSet));
                    }
                    return listaProdutos;
                }
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        throw new RuntimeException("Nenhum produto encontrado!");
    }

    /**
     * Método que cria um objeto Produto a partir de um ResultSet
     * @param resultSet
     * @return objeto Produto
     */
    private Produto extrairObjeto(ResultSet resultSet) {
        try {
            LocalizacaoDAO localizacaoDAO = new LocalizacaoDAO();
            ArrayList<Localizacao> localizacoes = localizacaoDAO.buscarLocalizacoesPorProduto(resultSet.getInt("id"));
            ClassificacaoDAO classificacaoDAO = new ClassificacaoDAO();
            Classificacao classificacao = classificacaoDAO.buscarClassificacaoPorProduto(resultSet.getInt("classificacao_id"));

            return new ProdutoFactory().getProduto(
                    resultSet.getInt("id"),
                    resultSet.getInt("quantidade"),
                    resultSet.getString("nome"),
                    resultSet.getString("caracteristicas"),
                    resultSet.getString("anexos"),
                    resultSet.getBoolean("descartavel"),
                    resultSet.getByte("imagem"),
                    localizacoes,
                    classificacao
            );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
