package br.senai.sc.almoxarifado.util;

import br.senai.sc.almoxarifado.dto.ClassificacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.validation.Valid;

public class ClassificacaoUtil {
    private ObjectMapper objectMapper = new ObjectMapper();

    public Classificacao convertJsonToModel(String classificacaoJson) {
        ClassificacaoDTO classificacaoDTO = convertJsonToDTO(classificacaoJson);
        return convertDtoToModel(classificacaoDTO);
    }

    private ClassificacaoDTO convertJsonToDTO(String classificacaoDTO) {
        try {
            return this.objectMapper.readValue(classificacaoDTO, ClassificacaoDTO.class);
        } catch (Exception exception) {
            throw new RuntimeException(exception.getMessage());
        }
    }

    private Classificacao convertDtoToModel(@Valid ClassificacaoDTO classificacaoDTO) {
        return this.objectMapper.convertValue(classificacaoDTO, Classificacao.class);
    }

    public Classificacao convertJsonToClassificacao(String classificacaoJson) {
        try {
            return this.objectMapper.readValue(classificacaoJson, Classificacao.class);
        } catch (Exception exception) {
            throw new RuntimeException(exception.getMessage());
        }
    }
}
