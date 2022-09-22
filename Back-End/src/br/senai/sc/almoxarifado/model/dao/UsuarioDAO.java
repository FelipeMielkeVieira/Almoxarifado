package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Atendente1;
import br.senai.sc.almoxarifado.model.entities.Atendente2;
import br.senai.sc.almoxarifado.model.entities.Professor;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.UsuarioFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class UsuarioDAO {

    private final Connection conexaoUsuario;

    public UsuarioDAO(Connection conexaoUsuario) {
        this.conexaoUsuario = new ConexaoFactory().conectaBD();
    }

    public void inserirUsuario(Usuario usuario) {

        String sql = "insert into usuario (email, senha, nome, tipo) values (?, ?, ?, ?)";

        try (PreparedStatement statement = conexaoUsuario.prepareStatement(sql)) {

            statement.setString(1, usuario.getEmailUsuario());
            statement.setString(2, usuario.getSenhaUsuario());
            statement.setString(3, usuario.getNomeUsuario());
            statement.setString(7, (
                    (usuario instanceof Professor) ? "PROFESSOR" :
                            (usuario instanceof Atendente1) ? "ATENDENTE1" :
                                    (usuario instanceof Atendente2) ? "ATENDENTE2" : "SUPERVISOR"
            ));

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public Usuario selecionarPorEmail(String email) {
        String sql = "select * from pessoa where email = ?";

        try (PreparedStatement stmt = conexaoUsuario.prepareStatement(sql)) {

            stmt.setString(1, email);

            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet != null && resultSet.next()) {
                    return extrairObjeto(resultSet);
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na execução do comando SQL");
        }

        throw new RuntimeException("E-mail não encontrado!");
    }

    public ArrayList<Usuario> selecionarTodos(int id) {
        String sql = "select * from usuario where id > ? limit 18";

        try (PreparedStatement stmt = conexaoUsuario.prepareStatement(sql)) {

            stmt.setInt(1, id);
            try (ResultSet resultSet = stmt.executeQuery()) {

                ArrayList<Usuario> usuarios = new ArrayList<>();
                if (resultSet != null) {
                    while (resultSet.next()) {
                        usuarios.add(extrairObjeto(resultSet));
                    }
                    return usuarios;
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na execução do comando SQL");
        }

        throw new RuntimeException("Nenhum usuário encontrado!");
    }

    public ArrayList<Usuario> selecionarPorNome(String nome) {

        String sql = "select * from usuario where nome like ? limit 18";

        try (PreparedStatement stmt = conexaoUsuario.prepareStatement(sql)) {

            stmt.setString(1, "%" + nome + "%");
            try (ResultSet resultSet = stmt.executeQuery()) {

                ArrayList<Usuario> usuarios = new ArrayList<>();
                if (resultSet != null) {
                    while (resultSet.next()) {
                        usuarios.add(extrairObjeto(resultSet));
                    }
                    return usuarios;
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na execução do comando SQL");
        }

        throw new RuntimeException("Nenhum usuário encontrado!");
    }

    public void removerUsuario(int id) {
        String sql = "delete from usuario where id = ?";

        try (PreparedStatement stmt = conexaoUsuario.prepareStatement(sql)) {

            stmt.setInt(1, id);
            try {
               stmt.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }
    }

    private Usuario extrairObjeto(ResultSet resultSet) {
        try {
            return new UsuarioFactory().getUsuario(resultSet.getString("email"),
                    resultSet.getString("senha"),
                    resultSet.getString("nome"),
                    resultSet.getString("tipo"));
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
