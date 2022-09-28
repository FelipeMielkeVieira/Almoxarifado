package br.senai.sc.almoxarifado.model;

import br.senai.sc.almoxarifado.model.dao.LocalizacaoDAO;
import br.senai.sc.almoxarifado.model.dao.ProdutoDAO;
import br.senai.sc.almoxarifado.model.dao.UsuarioDAO;
import br.senai.sc.almoxarifado.model.entities.Atendente1;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Usuario;

public class Teste {
    public static void main(String[] args) {
        produtoTeste();
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
        System.out.println(dao.buscarProdutos(1));
    }
}
