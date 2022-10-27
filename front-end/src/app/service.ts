import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  usuarios = [
    {
      nome: 'Felipe',
      email: 'felipe_mielke-vieira@estudante.sc.senai.br',
      senha: '123',
      tipo: 1,
    },
    {
      nome: 'Kenzo',
      email: 'kenzo_sato@estudante.sc.senai.br',
      senha: '123',
      tipo: 2,
    },
    {
      nome: 'Matheus',
      email: 'matheus_hohmann@estudante.sc.senai.br',
      senha: '123',
      tipo: 3,
    },
    {
      nome: 'Thiago',
      email: 'thiago_braga@estudante.sesisenai.org.br',
      senha: '123',
      tipo: 4,
    },
  ];

  usuariosPendentes = [
    {
      nome: 'Vytor',
      email: 'vytor_luiz@estudante.sc.senai.br',
      senha: '123',
      tipo: 1,
    },
    {
      nome: 'Kauan',
      email: 'kauan_hohmann@estudante.sc.senai.br',
      senha: '123',
      tipo: 2,
    },
  ]

  classificacoes = [
    { id: 1, classificacao: 'Materiais para Projetos' },
    { id: 2, classificacao: 'Materiais Elétricos' },
    { id: 3, classificacao: 'Ferramentas Mecânicas' },
    { id: 4, classificacao: 'Materiais' },
    { id: 5, classificacao: 'Instrumentos de Medição' },
    { id: 6, classificacao: 'Ferramentas Manuais' },
    { id: 7, classificacao: 'Componentes Eletrônicos' },
    { id: 8, classificacao: 'Materiais Didáticos' },
    { id: 9, classificacao: 'Dispositivos Elétricos' },
    { id: 10, classificacao: 'Equipamentos de Segurança' },
    { id: 11, classificacao: 'Ferramentas Elétricas' },
    { id: 12, classificacao: 'Dispositivos' },
    { id: 13, classificacao: 'Equipamentos de Proteção' },
    { id: 14, classificacao: 'Materiais de Limpeza' },
    { id: 15, classificacao: 'Ferramentas' },
  ];

  itens = [
    {
      id: 1,
      nome: 'Abraçadeira grande de nylon preta',
      descricao: 'Abraçadeira preta',
      quantidade: 61,
      descartavel: true,
      imagem: '../assets/Abracadeira.jfif',
      classificacao: 1,
      anexos: [
        {
          descricao: "teste",
          anexo: "google.com"
        },
        {
          descricao: "teste 2",
          anexo: "google.com"
        },
        {
          descricao: "teste 3",
          anexo: "google.com"
        },
      ]
    },
    {
      id: 2,
      nome: 'Bateria 12V',
      descricao: 'Bateria 12V',
      quantidade: 0,
      descartavel: true,
      imagem: '../assets/bateria.jfif',
      classificacao: 2,
      anexos: [
        {
          descricao: "teste",
          anexo: "google.com"
        },
        {
          descricao: "teste 2",
          anexo: "google.com"
        },
        {
          descricao: "teste 3",
          anexo: "google.com"
        },
      ]
    },
    {
      id: 3,
      nome: 'Chave alanca',
      descricao: 'Chave alanca',
      quantidade: 5,
      descartavel: false,
      imagem: '../assets/chave.jfif',
      classificacao: 6,
      anexos: [
        {
          descricao: "teste",
          anexo: "google.com"
        },
        {
          descricao: "teste 2",
          anexo: "google.com"
        },
        {
          descricao: "teste 3",
          anexo: "google.com"
        },
      ]
    },
  ];

  sacolas = [
    {
      id: 1,
      data_retirada: '2022-08-25 09:00',
      data_devolucao: '2022-09-30 09:00',
      usuario_email: 'felipe_mielke-vieira@estudante.sc.senai.br',
    },
  ];

  sacolaProduto = [
    { id: 1, qtd_produto: 2, sacola_id: 1, produto_id: 3 },
    { id: 2, qtd_produto: 4, sacola_id: 1, produto_id: 1 },
  ];

  reserva = [
    {
      id: 1,
      data_retirada: '2022-06-20',
      data_devolucao: '2022-09-30',
      status: 2,
      usuario_email: 'felipe_mielke-vieira@estudante.sc.senai.br',
    },
  ];

  reservaProduto = [
    { id: 1, qtd_produto: 3, reserva_id: 1, produto_id: 1 },
    { id: 2, qtd_produto: 5, reserva_id: 1, produto_id: 2 },
  ];

  produtoLocalizacao = [
    { id: 1, produtoId: 1, portaId: 9, paredeCentroId: 1, armarioId: 2 },
    { id: 2, produtoId: 2, portaId: 6, paredeCentroId: 1, armarioId: 2 },
    { id: 3, produtoId: 3, portaId: 8, paredeCentroId: 2, armarioId: 1 },
  ];

  localizacoes = [
    { checked: false, id: 1, nome: 'P1' },
    { checked: false, id: 2, nome: 'P2' },
    { checked: false, id: 3, nome: 'P3' },
    { checked: false, id: 4, nome: 'P4' },
    { checked: false, id: 5, nome: 'CE' },
    { checked: false, id: 6, nome: 'CD' },
    { checked: false, id: 7, nome: 'A1', id_pai: 1 },
    { checked: false, id: 8, nome: 'A2', id_pai: 1 },
    { checked: false, id: 9, nome: 'A3', id_pai: 2 },
    { checked: false, id: 10, nome: 'A4', id_pai: 2 },
    { checked: false, id: 11, nome: 'A5', id_pai: 3 },
    { checked: false, id: 12, nome: '1', id_pai: 7 },
    { checked: false, id: 13, nome: '2', id_pai: 7 },
    { checked: false, id: 14, nome: '3', id_pai: 7 },
    { checked: false, id: 15, nome: '4', id_pai: 7 },
    { checked: false, id: 16, nome: '5', id_pai: 8 },
    { checked: false, id: 17, nome: '6', id_pai: 8 },
    { checked: false, id: 18, nome: '7', id_pai: 8 },
    { checked: false, id: 19, nome: '8', id_pai: 8 },
    { checked: false, id: 20, nome: '9', id_pai: 9 },
    { checked: false, id: 21, nome: '10', id_pai: 9 },
    { checked: false, id: 22, nome: '11', id_pai: 9 },
    { checked: false, id: 23, nome: '12', id_pai: 9 },
    { checked: false, id: 24, nome: '13', id_pai: 9 },
    { checked: false, id: 25, nome: '14', id_pai: 10 },
    { checked: false, id: 26, nome: '15', id_pai: 10 },
    { checked: false, id: 27, nome: '16', id_pai: 10 },
    { checked: false, id: 28, nome: '17', id_pai: 10 },
    { checked: false, id: 29, nome: '18', id_pai: 11 },
    { checked: false, id: 30, nome: '19', id_pai: 11 },
    { checked: false, id: 31, nome: '20', id_pai: 11 },
  ];

  retornaFilhosLocalizacao(listaAtual: any, id_pai: number) {
    let listaNova = [];
    if(id_pai == 0) {
      for (const loc of this.localizacoes) {
        if(!loc.id_pai) {
          listaNova.push(loc);
        }
      }
    } else {
      for (const loc of this.localizacoes) {
        if(loc.id_pai == id_pai) {
          listaNova.push(loc);
        }
      }
    }
    listaAtual.push(listaNova);
    return listaAtual;
  }

  // findAll(): Observable<Object[]> {
  //     return this.httpClient.get<Object[]>('http://localhost:3000/users');
  // }

  retornaProduto(id: number) {
    for (const e of this.itens) {
      if (e.id == id) {
        return e;
      }
    }
    return null;
  }

  retornaSacola(id: number) {
    for (const sacola of this.sacolas) {
      if (id == sacola.id) {
        return sacola;
      }
    }
    return null;
  }

  retornaReserva(id: number) {
    for (const reserva of this.reserva) {
      if (id == reserva.id) {
        return reserva;
      }
    }
    return null;
  }

  retornaProdutosReserva(id: number) {
    let listaFinal = [];
    for (const reserva of this.reservaProduto) {
      if (id == reserva.reserva_id) {
        let item = this.retornaProduto(reserva.produto_id) || {
          id: 1,
          nome: '',
          quantidade: 0,
          descartavel: false,
          imagem: '',
        };
        listaFinal.push({
          id: item.id,
          nome: item.nome,
          quantidade: item.quantidade,
          descartavel: item.descartavel,
          imagem: item.imagem,
          qtd_atual: reserva.qtd_produto,
        });
      }
    }
    return listaFinal;
  }

  retornaSacolasUsuario(email: string) {
    let listaFinal = [];
    for (const sacola of this.sacolas) {
      if (email == sacola.usuario_email) {
        listaFinal.push(sacola);
      }
    }
    return listaFinal;
  }

  retornaProdutosSacola(id: number) {
    let listaFinal = [];
    for (const sacola of this.sacolaProduto) {
      if (id == sacola.sacola_id) {
        let item = this.retornaProduto(sacola.produto_id) || {
          id: 1,
          nome: '',
          quantidade: 0,
          descartavel: false,
          imagem: '',
        };
        listaFinal.push({
          id: item.id,
          nome: item.nome,
          quantidade: item.quantidade,
          descartavel: item.descartavel,
          imagem: item.imagem,
          qtd_atual: sacola.qtd_produto,
        });
      }
    }
    return listaFinal;
  }

  retornaDisponibilidadeItem(id: number, data: Date) {
    let quantidadeTotal = (
      this.retornaProduto(id) || {
        id: 1,
        nome: '',
        quantidade: 0,
        descartavel: false,
        imagem: '',
      }
    ).quantidade;
    for (const reserva of this.reservaProduto) {
      if (id == reserva.produto_id) {
        if (
          new Date(
            (
              this.retornaReserva(reserva.reserva_id) || { data_retirada: '' }
            ).data_retirada
          ) < data &&
          new Date(
            (
              this.retornaReserva(reserva.reserva_id) || { data_devolucao: '' }
            ).data_devolucao
          ) > data &&
          !(
            (this.retornaReserva(reserva.reserva_id) || { status: '' })
              .status == 2
          )
        ) {
          quantidadeTotal -= reserva.qtd_produto;
        }
      }
    }
    return quantidadeTotal;
  }
}
