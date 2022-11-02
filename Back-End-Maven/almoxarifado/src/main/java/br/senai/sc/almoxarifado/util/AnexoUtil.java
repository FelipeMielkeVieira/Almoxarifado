package br.senai.sc.almoxarifado.util;

import br.senai.sc.almoxarifado.dto.ProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.Anexo;
import br.senai.sc.almoxarifado.model.entities.Produto;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.validation.Valid;
import java.util.List;

public class AnexoUtil {

    private ObjectMapper objectMapper = new ObjectMapper();

    public void convertJsonToModel(String anexosList) {
//        List<Anexo> listaAnexos = convertJsonToDTO(anexosList);
//        return convertDtoToModel(listaAnexos);
        System.out.println(anexosList);
    }

    private ProdutoDTO convertJsonToDTO(String produtoDTO) {
        try {
            return this.objectMapper.readValue(produtoDTO, ProdutoDTO.class);
        } catch (Exception exception) {
            throw new RuntimeException(exception.getMessage());
        }
    }

    private Produto convertDtoToModel(@Valid ProdutoDTO livroDTO) {
        return this.objectMapper.convertValue(livroDTO, Produto.class);
    }
}
