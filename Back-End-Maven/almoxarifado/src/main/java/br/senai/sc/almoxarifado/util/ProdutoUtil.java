package br.senai.sc.almoxarifado.util;

import br.senai.sc.almoxarifado.dto.ProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.Produto;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.validation.Valid;

public class ProdutoUtil {
    private ObjectMapper objectMapper = new ObjectMapper();

    public Produto convertJsonToModel(String produtoJson) {
        ProdutoDTO produtoDTO = convertJsonToDTO(produtoJson);
        return convertDtoToModel(produtoDTO);
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
