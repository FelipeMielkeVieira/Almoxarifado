package br.senai.sc.almoxarifado.model;

import br.senai.sc.almoxarifado.model.dao.*;
import br.senai.sc.almoxarifado.model.entities.*;

import java.util.ArrayList;
import java.util.Date;

public class Teste {
    public static void main(String[] args) {
        sacolaTeste();
    }

    public static void usuarioTeste() {
        UsuarioDAO usuarioDAO = new UsuarioDAO();
        usuarioDAO.inserirUsuario(new Atendente1("teste", "teste", "teste"));
        usuarioDAO.inserirUsuario(new Atendente1("teste2", "teste2", "teste2"));
        System.out.println("Inserido com sucesso!\n");
        System.out.println("Selecionar todos: \n" + usuarioDAO.selecionarTodos(0, 17));
        System.out.println("---------------------------------------------------\n");
        System.out.println("Selecionar por email: \n " + usuarioDAO.selecionarPorEmail("teste"));
        System.out.println("---------------------------------------------------\n");
        System.out.println("Selecionar por nome: \n" + usuarioDAO.selecionarPorNome("teste", 0, 17));
        System.out.println("---------------------------------------------------\n");
        usuarioDAO.removerUsuario("teste");
        System.out.println("Usuário removido com sucesso");
    }

    public static void localizcaoTeste() {
        LocalizacaoDAO dao = new LocalizacaoDAO();

        dao.inserirLocalizacao(new Localizacao("aaaa"));
        dao.inserirLocalizacao(new Localizacao("bbbb"));

        System.out.println("Inserido com sucesso!\n");

        System.out.println("Selecionar todos: \n" + dao.selecionarTodos(0, 100));
        System.out.println("---------------------------------------------------\n");
        dao.removerLocalizacao(1);
        System.out.println("Localização removida com sucesso");
    }

    public static void produtoTeste() {
        ProdutoDAO dao = new ProdutoDAO();
        System.out.println("Selecionar todos: \n" + dao.buscarProdutos(18));
        System.out.println("---------------------------------------------------\n");
        ArrayList<Localizacao> localizacoes = new ArrayList<>();
        localizacoes.add(new Localizacao(2,"bbbb"));
        Produto prod = new Produto( 23, 10, "Mouse", "vermelho",
                "as", false, (byte) 0, localizacoes, new Classificacao(1, "P1"));
        dao.inserirProduto(prod);

        dao.deletarProduto(23);
        dao.diminuirQuantidade(19, 15);
        dao.deletarProduto(22);
    }

    public static void sacolaTeste() {
        SacolaDAO sacolaDAO = new SacolaDAO();

        Date date1 = new Date();
        Usuario usuario = new Atendente1("teste", "teste", "teste");

        ArrayList<SacolaProduto> lista = new ArrayList<>();
        ArrayList<Localizacao> localizacoes = new ArrayList<>();
        localizacoes.add(new Localizacao(2,"bbbb"));
        Produto prod =  new Produto( 20, 10, "Mouse", "vermelho",
                "as", false, (byte) 0, localizacoes, new Classificacao(1, "P1"));
        //Integer codigoSacolaProduto, Integer qtdProduto, Produto produto

        lista.add(new SacolaProduto(1, prod));

        //Date dataRetirada, Date dataDevolucao, Usuario usuarioSacola, ArrayList<SacolaProduto> listaSacolaProdutos

        Sacola sacola = new Sacola(date1, date1, usuario, lista);
//        sacolaDAO.inserirSacola(sacola);

        System.out.println("MANO TA AQ\n\n\n" + sacolaDAO.buscarSacolas(1, 18));
    }
}
