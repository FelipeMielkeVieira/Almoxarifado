package br.senai.sc.almoxarifado.model.factory;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.entities.SacolaProduto;
import br.senai.sc.almoxarifado.model.entities.Usuario;

import java.util.ArrayList;
import java.util.Date;

public class SacolaFactory {
    public Sacola getSacola(Integer codigoSacola, Date dataRetirada, Date dataDevolucao,
                            Usuario usuarioSacola, ArrayList<SacolaProduto> listaSacolaProdutos) {

        return new Sacola(codigoSacola, dataRetirada, dataDevolucao, usuarioSacola, listaSacolaProdutos);
    }
}
