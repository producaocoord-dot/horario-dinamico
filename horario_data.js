// Dados pré-carregados dos horários (Original 2026.3 e Ajustado 19_23)
const CATALOG = {
  "DC5199": {
    "code": "DC5199",
    "name": "LAB DE ALGORITMOS",
    "dept": "OUTRO",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 3
  },
  "DCC199": {
    "code": "DCC199",
    "name": "ALGORITMOS",
    "dept": "DCC",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 3
  },
  "EPD108": {
    "code": "EPD108",
    "name": "METODOLOGIA CIENTÍFICA E TECNOLÓGICA",
    "dept": "EPD",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "Marcos Rodrigues",
    "dif": 1
  },
  "EPD110": {
    "code": "EPD110",
    "name": "EXPRESSÃO GRÁFICA I",
    "dept": "EPD",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "Romir",
    "dif": 2
  },
  "EPD130": {
    "code": "EPD130",
    "name": "INTRODUÇÃO À ENG. DE PRODUÇÃO",
    "dept": "EPD",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "Roberta",
    "dif": 0
  },
  "FIS122": {
    "code": "FIS122",
    "name": "LAB DE TRANSFORMAÇÕES FÍSICAS",
    "dept": "FIS",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 1
  },
  "MAT154": {
    "code": "MAT154",
    "name": "CÁLCULO I",
    "dept": "MAT",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 4
  },
  "MAT155": {
    "code": "MAT155",
    "name": "GEOMETRIA ANALÍTICA",
    "dept": "MAT",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 4
  },
  "QUI126": {
    "code": "QUI126",
    "name": "LAB DE ESTRUTURAS QUIMICAS",
    "dept": "QUI",
    "defaultPeriod": 1,
    "prereqs": [],
    "professor": "",
    "dif": 1
  },
  "EPD111": {
    "code": "EPD111",
    "name": "TRATAMENTO E ANÁLISE DE DADOS I",
    "dept": "EPD",
    "defaultPeriod": 2,
    "prereqs": [
      "DCC199"
    ],
    "professor": "Romir",
    "dif": 4
  },
  "EXT194": {
    "code": "EXT194",
    "name": "EXTENSIONISTA 3º SETOR",
    "dept": "EXT",
    "defaultPeriod": 2,
    "prereqs": [
      "EPD130"
    ],
    "professor": "",
    "dif": 0
  },
  "FIS073": {
    "code": "FIS073",
    "name": "FÍSICA I",
    "dept": "FIS",
    "defaultPeriod": 2,
    "prereqs": [
      "MAT154"
    ],
    "professor": "",
    "dif": 4
  },
  "FIS077": {
    "code": "FIS077",
    "name": "LAB DE FÍSICA I",
    "dept": "FIS",
    "defaultPeriod": 2,
    "prereqs": [],
    "professor": "",
    "dif": 2
  },
  "MAT156": {
    "code": "MAT156",
    "name": "CÁLCULO II",
    "dept": "MAT",
    "defaultPeriod": 2,
    "prereqs": [
      "MAT155",
      "MAT154"
    ],
    "professor": "",
    "dif": 4
  },
  "MAT158": {
    "code": "MAT158",
    "name": "ÁLGEBRA LINEAR",
    "dept": "MAT",
    "defaultPeriod": 2,
    "prereqs": [
      "MAT155"
    ],
    "professor": "",
    "dif": 4
  },
  "QUI125": {
    "code": "QUI125",
    "name": "QUÍMICA",
    "dept": "QUI",
    "defaultPeriod": 2,
    "prereqs": [],
    "professor": "",
    "dif": 1
  },
  "CAD014": {
    "code": "CAD014",
    "name": "ADM. E ORGANIZAÇÃO DE EMPRESAS",
    "dept": "CAD",
    "defaultPeriod": 3,
    "prereqs": [],
    "professor": "",
    "dif": 1
  },
  "EPD115": {
    "code": "EPD115",
    "name": "TRATAMENTO E ANÁLISE DE DADOS II",
    "dept": "EPD",
    "defaultPeriod": 3,
    "prereqs": [
      "EPD111"
    ],
    "professor": "Romir",
    "dif": 2
  },
  "EST028": {
    "code": "EST028",
    "name": "INTRODUÇÃO À ESTATÍSTICA",
    "dept": "EST",
    "defaultPeriod": 3,
    "prereqs": [],
    "professor": "",
    "dif": 2
  },
  "FIS074": {
    "code": "FIS074",
    "name": "FÍSICA II",
    "dept": "FIS",
    "defaultPeriod": 3,
    "prereqs": [
      "MAT154",
      "FIS073"
    ],
    "professor": "",
    "dif": 4
  },
  "FIS078": {
    "code": "FIS078",
    "name": "LAB DE FÍSICA II",
    "dept": "FIS",
    "defaultPeriod": 3,
    "prereqs": [
      "FIS077",
      "FIS073"
    ],
    "professor": "",
    "dif": 1
  },
  "MAT157": {
    "code": "MAT157",
    "name": "CÁLCULO III",
    "dept": "MAT",
    "defaultPeriod": 3,
    "prereqs": [
      "MAT156"
    ],
    "professor": "",
    "dif": 4
  },
  "DCC008": {
    "code": "DCC008",
    "name": "CÁLCULO NUMÉRICO",
    "dept": "DCC",
    "defaultPeriod": 4,
    "prereqs": [
      "DCC199",
      "MAT154",
      "MAT158"
    ],
    "professor": "",
    "dif": 3
  },
  "EPD075": {
    "code": "EPD075",
    "name": "ORGANIZAÇÃO DO TRABALHO E PRODUÇÃO",
    "dept": "EPD",
    "defaultPeriod": 4,
    "prereqs": [
      "CAD014"
    ],
    "professor": "Eduardo",
    "dif": 2
  },
  "EPD116": {
    "code": "EPD116",
    "name": "TRATAMENTO E ANÁLISE DE DADOS III",
    "dept": "EPD",
    "defaultPeriod": 4,
    "prereqs": [
      "EPD115",
      "EST028"
    ],
    "professor": "Mariana",
    "dif": 2
  },
  "FIS075": {
    "code": "FIS075",
    "name": "FÍSICA III",
    "dept": "FIS",
    "defaultPeriod": 4,
    "prereqs": [
      "MAT156",
      "FIS073"
    ],
    "professor": "",
    "dif": 5
  },
  "MAT029": {
    "code": "MAT029",
    "name": "EQUAÇÕES DIFERENCIAIS I",
    "dept": "MAT",
    "defaultPeriod": 4,
    "prereqs": [
      "MAT156"
    ],
    "professor": "",
    "dif": 4
  },
  "ENE077": {
    "code": "ENE077",
    "name": "ENERGIA E ELETRICIDADE",
    "dept": "ENE",
    "defaultPeriod": 5,
    "prereqs": [
      "FIS075"
    ],
    "professor": "",
    "dif": 3
  },
  "EPD010": {
    "code": "EPD010",
    "name": "ENGENHARIA DE MATERIAIS",
    "dept": "EPD",
    "defaultPeriod": 5,
    "prereqs": [
      "QUI125",
      "QUI126"
    ],
    "professor": "",
    "dif": 1
  },
  "EPD059": {
    "code": "EPD059",
    "name": "GESTÃO DO PROJETO",
    "dept": "EPD",
    "defaultPeriod": 5,
    "prereqs": [
      "EPD075"
    ],
    "professor": "Roberta",
    "dif": 1
  },
  "EPD067": {
    "code": "EPD067",
    "name": "ENGENHARIA DA QUALIDADE I",
    "dept": "EPD",
    "defaultPeriod": 5,
    "prereqs": [
      "CAD014"
    ],
    "professor": "Clarice",
    "dif": 3
  },
  "EPD114": {
    "code": "EPD114",
    "name": "EXPRESSÃO GRÁFICA II",
    "dept": "EPD",
    "defaultPeriod": 5,
    "prereqs": [
      "EPD110"
    ],
    "professor": "Marcos Borges",
    "dif": 1
  },
  "EST061": {
    "code": "EST061",
    "name": "ESTATÍSTICA APLICADA À ENGENHARIA I",
    "dept": "EST",
    "defaultPeriod": 5,
    "prereqs": [
      "EST028"
    ],
    "professor": "",
    "dif": 4
  },
  "EXT196": {
    "code": "EXT196",
    "name": "INTEGRAÇÃO E DISSEMINAÇÃO DO CONHECIMENTO",
    "dept": "EXT",
    "defaultPeriod": 5,
    "prereqs": [
      "EXT194"
    ],
    "professor": "",
    "dif": 0
  },
  "FIS081": {
    "code": "FIS081",
    "name": "FENÔMENOS DE TRANSPORTE",
    "dept": "FIS",
    "defaultPeriod": 5,
    "prereqs": [
      "FIS074",
      "MAT157"
    ],
    "professor": "",
    "dif": 4
  },
  "EPD026": {
    "code": "EPD026",
    "name": "PLANEJAMENTO ESTRATÉGICO",
    "dept": "EPD",
    "defaultPeriod": 6,
    "prereqs": [
      "EPD075"
    ],
    "professor": "Luiz",
    "dif": 2
  },
  "EPD065": {
    "code": "EPD065",
    "name": "ENGENHARIA DA SUSTENTABILIDADE I",
    "dept": "EPD",
    "defaultPeriod": 6,
    "prereqs": [
      "CAD014"
    ],
    "professor": "Bruno",
    "dif": 1
  },
  "EPD074": {
    "code": "EPD074",
    "name": "PROCESSOS PRODUTIVOS",
    "dept": "EPD",
    "defaultPeriod": 6,
    "prereqs": [
      "ENE077",
      "EPD075",
      "EPD010"
    ],
    "professor": "Marcio",
    "dif": 4
  },
  "EPD099": {
    "code": "EPD099",
    "name": "PESQUISA OPERACIONAL I",
    "dept": "EPD",
    "defaultPeriod": 6,
    "prereqs": [
      "MAT029",
      "DCC008"
    ],
    "professor": "Fernando",
    "dif": 5
  },
  "EPD117": {
    "code": "EPD117",
    "name": "ENGENHARIA DE PRODUTO",
    "dept": "EPD",
    "defaultPeriod": 6,
    "prereqs": [
      "EPD059"
    ],
    "professor": "Roberta",
    "dif": 2
  },
  "MAC015": {
    "code": "MAC015",
    "name": "RESISTÊNCIA DOS MATERIAIS",
    "dept": "MAC",
    "defaultPeriod": 6,
    "prereqs": [
      "MAT029"
    ],
    "professor": "",
    "dif": 2
  },
  "EPD057": {
    "code": "EPD057",
    "name": "ERGONOMIA",
    "dept": "EPD",
    "defaultPeriod": 7,
    "prereqs": [
      "EPD075"
    ],
    "professor": "Eduardo",
    "dif": 3
  },
  "EPD080": {
    "code": "EPD080",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO I",
    "dept": "EPD",
    "defaultPeriod": 7,
    "prereqs": [
      "EPD074"
    ],
    "professor": "Picorone",
    "dif": 4
  },
  "EPD100": {
    "code": "EPD100",
    "name": "PESQUISA OPERACIONAL II",
    "dept": "EPD",
    "defaultPeriod": 7,
    "prereqs": [
      "EPD099"
    ],
    "professor": "Fernando",
    "dif": 4
  },
  "EPD112": {
    "code": "EPD112",
    "name": "PROCESSOS DE FABRICAÇÃO",
    "dept": "EPD",
    "defaultPeriod": 7,
    "prereqs": [
      "EPD117"
    ],
    "professor": "Marcos Borges",
    "dif": 1
  },
  "EXT195": {
    "code": "EXT195",
    "name": "CAPACITAÇÃO E TREINAMENTO EM EP",
    "dept": "EXT",
    "defaultPeriod": 7,
    "prereqs": [
      "EXT196"
    ],
    "professor": "",
    "dif": 0
  },
  "FIN013": {
    "code": "FIN013",
    "name": "GESTÃO FINANCEIRA I",
    "dept": "FIN",
    "defaultPeriod": 7,
    "prereqs": [
      "EST028"
    ],
    "professor": "",
    "dif": 2
  },
  "EPD076": {
    "code": "EPD076",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO II",
    "dept": "EPD",
    "defaultPeriod": 8,
    "prereqs": [
      "EPD099",
      "EPD080"
    ],
    "professor": "Marcio",
    "dif": 5
  },
  "EPD101": {
    "code": "EPD101",
    "name": "ENGENHARIA ECONÔMICA I",
    "dept": "EPD",
    "defaultPeriod": 8,
    "prereqs": [
      "EST061",
      "MAT154"
    ],
    "professor": "Cristina",
    "dif": 2
  },
  "EPD104": {
    "code": "EPD104",
    "name": "ENGENHARIA DA SUSTENTABILIDADE II",
    "dept": "EPD",
    "defaultPeriod": 8,
    "prereqs": [
      "EPD065",
      "EPD026"
    ],
    "professor": "Bruno",
    "dif": 1
  },
  "EPD129": {
    "code": "EPD129",
    "name": "GESTÃO DA TECNOLOGIA E INOVAÇÃO",
    "dept": "EPD",
    "defaultPeriod": 8,
    "prereqs": [
      "EPD117"
    ],
    "professor": "Mariana",
    "dif": 2
  },
  "ESA011": {
    "code": "ESA011",
    "name": "FUND. DE SEGURANÇA NO TRABALHO",
    "dept": "ESA",
    "defaultPeriod": 8,
    "prereqs": [
      "EPD065"
    ],
    "professor": "",
    "dif": 1
  },
  "FIN014": {
    "code": "FIN014",
    "name": "GESTÃO FINANCEIRA II",
    "dept": "FIN",
    "defaultPeriod": 8,
    "prereqs": [
      "FIN013"
    ],
    "professor": "",
    "dif": 3
  },
  "EPD030": {
    "code": "EPD030",
    "name": "AUTOMAÇÃO DA PRODUÇÃO",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EPD116",
      "ENE077"
    ],
    "professor": "",
    "dif": 2
  },
  "EPD053": {
    "code": "EPD053",
    "name": "EMPREENDEDORISMO",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EPD129"
    ],
    "professor": "Mariana",
    "dif": 1
  },
  "EPD068": {
    "code": "EPD068",
    "name": "ENGENHARIA DA QUALIDADE II",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EST061",
      "EPD067"
    ],
    "professor": "Clarice",
    "dif": 4
  },
  "EPD069": {
    "code": "EPD069",
    "name": "LOGÍSTICA I",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EPD099",
      "EST061"
    ],
    "professor": "Roberto",
    "dif": 3
  },
  "EPD102": {
    "code": "EPD102",
    "name": "ENGENHARIA ECONÔMICA II",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EPD101",
      "FIN014"
    ],
    "professor": "Cristina",
    "dif": 2
  },
  "EPD113": {
    "code": "EPD113",
    "name": "PROTOTIPAGEM VIRTUAL",
    "dept": "EPD",
    "defaultPeriod": 9,
    "prereqs": [
      "EPD114"
    ],
    "professor": "Marcos Borges",
    "dif": 1
  },
  "EP5112": {
    "code": "EP5112",
    "name": "LAB DE PROCESSOS DE FABRICAÇÃO",
    "dept": "OUTRO",
    "defaultPeriod": 10,
    "prereqs": [],
    "professor": "Marcos Borges",
    "dif": 1
  },
  "EPD070": {
    "code": "EPD070",
    "name": "LOGÍSTICA II",
    "dept": "EPD",
    "defaultPeriod": 10,
    "prereqs": [
      "EPD069"
    ],
    "professor": "Roberto",
    "dif": 2
  },
  "EPD097": {
    "code": "EPD097",
    "name": "ENGENHARIA E SOCIEDADE",
    "dept": "EPD",
    "defaultPeriod": 10,
    "prereqs": [
      "MAT029"
    ],
    "professor": "Marcos Rodrigues",
    "dif": 1
  },
  "EPD103": {
    "code": "EPD103",
    "name": "REDES DE PRODUÇÃO",
    "dept": "EPD",
    "defaultPeriod": 10,
    "prereqs": [
      "EPD065",
      "EPD026"
    ],
    "professor": "Bruno",
    "dif": 1
  },
  "EPD106": {
    "code": "EPD106",
    "name": "GESTÃO DE MANUTENÇÕES",
    "dept": "EPD",
    "defaultPeriod": 10,
    "prereqs": [
      "EPD010"
    ],
    "professor": "Luiz",
    "dif": 3
  },
  "EPD119": {
    "code": "EPD119",
    "name": "PLANEJAMENTO DE INSTALAÇÕES",
    "dept": "EPD",
    "defaultPeriod": 10,
    "prereqs": [
      "EPD099",
      "EPD080"
    ],
    "professor": "Picorone",
    "dif": 4
  }
};

const PRESET_ORIGINAL = [
  {
    "id": "orig_EPD130_Segunda_17/19_1",
    "code": "EPD130",
    "name": "INTRODUÇÃO À ENG. DE PRODUÇÃO",
    "text": "Introdução a EPD e ACE - EPD130 (4265) e (5102.)",
    "dept": "EPD",
    "period": 1,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "Roberta",
    "prereqs": []
  },
  {
    "id": "orig_CUSTOM_Terça_17/19_1",
    "code": "CUSTOM",
    "name": "Algoritmos Prática DC5199D",
    "text": "Algoritmos Prática DC5199D",
    "dept": "OUTRO",
    "period": 1,
    "day": "Terça",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_DCC199_Segunda_19/21_1",
    "code": "DCC199",
    "name": "ALGORITMOS",
    "text": "Algoritmos - DCC199",
    "dept": "DCC",
    "period": 1,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_QUI126E_Terça_19/21_1",
    "code": "QUI126E",
    "name": "Laboratório de Química",
    "text": "Laboratório de Química - QUI126E",
    "dept": "QUI",
    "period": 1,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT154_Quarta_19/21_1",
    "code": "MAT154",
    "name": "CÁLCULO I",
    "text": "Cálculo I - MAT154",
    "dept": "MAT",
    "period": 1,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_DCC199_Quinta_19/21_1",
    "code": "DCC199",
    "name": "ALGORITMOS",
    "text": "Algoritmos - DCC199",
    "dept": "DCC",
    "period": 1,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT155_Sexta_19/21_1",
    "code": "MAT155",
    "name": "GEOMETRIA ANALÍTICA",
    "text": "Geometria Analítica - MAT155",
    "dept": "MAT",
    "period": 1,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_FIS122_Terça_21/23_1",
    "code": "FIS122",
    "name": "LAB DE TRANSFORMAÇÕES FÍSICAS",
    "text": "Laboratório de Ciências Físicas - FIS122 B",
    "dept": "FIS",
    "period": 1,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT155_Quarta_21/23_1",
    "code": "MAT155",
    "name": "GEOMETRIA ANALÍTICA",
    "text": "Geometria Analítica - MAT155",
    "dept": "MAT",
    "period": 1,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT154_Sexta_21/23_1",
    "code": "MAT154",
    "name": "CÁLCULO I",
    "text": "Cálculo I - MAT154",
    "dept": "MAT",
    "period": 1,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD111_Segunda_17/19_2",
    "code": "EPD111",
    "name": "TRATAMENTO E ANÁLISE DE DADOS I",
    "text": "Tratamento e Análise de Dados I A - EPD111 (LTI 3)",
    "dept": "EPD",
    "period": 2,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "Romir",
    "prereqs": [
      "DCC199"
    ]
  },
  {
    "id": "orig_EPD110_Terça_17/19_2",
    "code": "EPD110",
    "name": "EXPRESSÃO GRÁFICA I",
    "text": "Expressão Gráfica I - EPD110 (LTI 3)",
    "dept": "EPD",
    "period": 2,
    "day": "Terça",
    "slot": "17/19",
    "professor": "Romir",
    "prereqs": []
  },
  {
    "id": "orig_FIS077_Quarta_17/19_2",
    "code": "FIS077",
    "name": "LAB DE FÍSICA I",
    "text": "Laboratório de Física I - FIS077",
    "dept": "FIS",
    "period": 2,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EXT194_Sexta_17/19_2",
    "code": "EXT194",
    "name": "EXTENSIONISTA 3º SETOR",
    "text": "EXT194 -Interface da EP com Terceiro Setor (4265)",
    "dept": "EXT",
    "period": 2,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EPD130"
    ]
  },
  {
    "id": "orig_EPD111_Segunda_19/21_2",
    "code": "EPD111",
    "name": "TRATAMENTO E ANÁLISE DE DADOS I",
    "text": "Tratamento e Análise de Dados  I B - EPD111 (LTI 3)",
    "dept": "EPD",
    "period": 2,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Romir",
    "prereqs": [
      "DCC199"
    ]
  },
  {
    "id": "orig_FIS073_Terça_19/21_2",
    "code": "FIS073",
    "name": "FÍSICA I",
    "text": "Física I - FIS073",
    "dept": "FIS",
    "period": 2,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154"
    ]
  },
  {
    "id": "orig_MAT156_Quarta_19/21_2",
    "code": "MAT156",
    "name": "CÁLCULO II",
    "text": "Cálculo II - MAT156",
    "dept": "MAT",
    "period": 2,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT155",
      "MAT154"
    ]
  },
  {
    "id": "orig_FIS073_Quinta_19/21_2",
    "code": "FIS073",
    "name": "FÍSICA I",
    "text": "Física I - FIS073",
    "dept": "FIS",
    "period": 2,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154"
    ]
  },
  {
    "id": "orig_MAT158_Sexta_19/21_2",
    "code": "MAT158",
    "name": "ÁLGEBRA LINEAR",
    "text": "Álgebra Linear - MAT158",
    "dept": "MAT",
    "period": 2,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT155"
    ]
  },
  {
    "id": "orig_QUI125_Segunda_21/23_2",
    "code": "QUI125",
    "name": "QUÍMICA",
    "text": "Química Fundamental - QUI125",
    "dept": "QUI",
    "period": 2,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT158_Terça_21/23_2",
    "code": "MAT158",
    "name": "ÁLGEBRA LINEAR",
    "text": "Álgebra Linear - MAT158",
    "dept": "MAT",
    "period": 2,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT155"
    ]
  },
  {
    "id": "orig_QUI125_Quinta_21/23_2",
    "code": "QUI125",
    "name": "QUÍMICA",
    "text": "Química Fundamental - QUI125",
    "dept": "QUI",
    "period": 2,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT156_Sexta_21/23_2",
    "code": "MAT156",
    "name": "CÁLCULO II",
    "text": "Cálculo II - MAT156",
    "dept": "MAT",
    "period": 2,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT155",
      "MAT154"
    ]
  },
  {
    "id": "orig_CAD014_Segunda_17/19_3",
    "code": "CAD014",
    "name": "ADM. E ORGANIZAÇÃO DE EMPRESAS",
    "text": "Adm. Org Emp -\nCAD014 (4118)",
    "dept": "CAD",
    "period": 3,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_CAD014_Terça_17/19_3",
    "code": "CAD014",
    "name": "ADM. E ORGANIZAÇÃO DE EMPRESAS",
    "text": "Adm. Org Emp -\nCAD014 (4118)",
    "dept": "CAD",
    "period": 3,
    "day": "Terça",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD114_Quarta_17/19_3",
    "code": "EPD114",
    "name": "EXPRESSÃO GRÁFICA II",
    "text": "Expressão Gráfica II - EPD114 (LTI 2)",
    "dept": "EPD",
    "period": 3,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "Marcos Borges",
    "prereqs": [
      "EPD110"
    ]
  },
  {
    "id": "orig_FIS074_Terça_19/21_3",
    "code": "FIS074",
    "name": "FÍSICA II",
    "text": "Física II - FIS074",
    "dept": "FIS",
    "period": 3,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154",
      "FIS073"
    ]
  },
  {
    "id": "orig_MAT157_Quarta_19/21_3",
    "code": "MAT157",
    "name": "CÁLCULO III",
    "text": "Cálculo III -\nMAT157",
    "dept": "MAT",
    "period": 3,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "orig_FIS074_Quinta_19/21_3",
    "code": "FIS074",
    "name": "FÍSICA II",
    "text": "Física II - FIS074",
    "dept": "FIS",
    "period": 3,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154",
      "FIS073"
    ]
  },
  {
    "id": "orig_EPD115_Segunda_21/23_3",
    "code": "EPD115",
    "name": "TRATAMENTO E ANÁLISE DE DADOS II",
    "text": "Tratamento e Análise de Dados II - EPD115 (LTI 3)",
    "dept": "EPD",
    "period": 3,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Romir",
    "prereqs": [
      "EPD111"
    ]
  },
  {
    "id": "orig_EST028_Terça_21/23_3",
    "code": "EST028",
    "name": "INTRODUÇÃO À ESTATÍSTICA",
    "text": "Intr. Estatística -\nEST028",
    "dept": "EST",
    "period": 3,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_FIS078_Quarta_21/23_3",
    "code": "FIS078",
    "name": "LAB DE FÍSICA II",
    "text": "Lab. Física II -\nFIS078",
    "dept": "FIS",
    "period": 3,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "FIS077",
      "FIS073"
    ]
  },
  {
    "id": "orig_EST028_Quinta_21/23_3",
    "code": "EST028",
    "name": "INTRODUÇÃO À ESTATÍSTICA",
    "text": "Intr. Estatística -\nEST028",
    "dept": "EST",
    "period": 3,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_MAT157_Sexta_21/23_3",
    "code": "MAT157",
    "name": "CÁLCULO III",
    "text": "Cálculo III -\nMAT157",
    "dept": "MAT",
    "period": 3,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "orig_EPD075_Quinta_17/19_4",
    "code": "EPD075",
    "name": "ORGANIZAÇÃO DO TRABALHO E PRODUÇÃO",
    "text": "Organização do Trabalho - EPD075 (4267)",
    "dept": "EPD",
    "period": 4,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "Eduardo",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_EPD065_Sexta_17/19_4",
    "code": "EPD065",
    "name": "ENGENHARIA DA SUSTENTABILIDADE I",
    "text": "Eng. Sustent. I\nEPD065 (5102)",
    "dept": "EPD",
    "period": 4,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "Bruno",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_EPD075_Segunda_19/21_4",
    "code": "EPD075",
    "name": "ORGANIZAÇÃO DO TRABALHO E PRODUÇÃO",
    "text": "Organização do Trabalho - EPD075 (4267)",
    "dept": "EPD",
    "period": 4,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Eduardo",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_FIS075_Terça_19/21_4",
    "code": "FIS075",
    "name": "FÍSICA III",
    "text": "Física III\nFIS075",
    "dept": "FIS",
    "period": 4,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156",
      "FIS073"
    ]
  },
  {
    "id": "orig_EPD065_Quarta_19/21_4",
    "code": "EPD065",
    "name": "ENGENHARIA DA SUSTENTABILIDADE I",
    "text": "Eng. Sustent. I\nEPD065 (5102)",
    "dept": "EPD",
    "period": 4,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Bruno",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_FIS075_Quinta_19/21_4",
    "code": "FIS075",
    "name": "FÍSICA III",
    "text": "Física III\nFIS075",
    "dept": "FIS",
    "period": 4,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156",
      "FIS073"
    ]
  },
  {
    "id": "orig_MAT029_Sexta_19/21_4",
    "code": "MAT029",
    "name": "EQUAÇÕES DIFERENCIAIS I",
    "text": "Eq. Diferenciais I\nMAT029",
    "dept": "MAT",
    "period": 4,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "orig_DCC008_Segunda_21/23_4",
    "code": "DCC008",
    "name": "CÁLCULO NUMÉRICO",
    "text": "Cálc. Numérico\nDCC008",
    "dept": "DCC",
    "period": 4,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "DCC199",
      "MAT154",
      "MAT158"
    ]
  },
  {
    "id": "orig_EPD116_Terça_21/23_4",
    "code": "EPD116",
    "name": "TRATAMENTO E ANÁLISE DE DADOS III",
    "text": "Tratamento e Análise de Dados III - EPD116 (5134)",
    "dept": "EPD",
    "period": 4,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Mariana",
    "prereqs": [
      "EPD115",
      "EST028"
    ]
  },
  {
    "id": "orig_MAT029_Quarta_21/23_4",
    "code": "MAT029",
    "name": "EQUAÇÕES DIFERENCIAIS I",
    "text": "Eq. Diferenciais I\nMAT029",
    "dept": "MAT",
    "period": 4,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "orig_DCC008_Quinta_21/23_4",
    "code": "DCC008",
    "name": "CÁLCULO NUMÉRICO",
    "text": "Cálc. Numérico\nDCC008",
    "dept": "DCC",
    "period": 4,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "DCC199",
      "MAT154",
      "MAT158"
    ]
  },
  {
    "id": "orig_EST061_Segunda_17/19_5",
    "code": "EST061",
    "name": "ESTATÍSTICA APLICADA À ENGENHARIA I",
    "text": "Estatíst. Aplic.\nEST061 (5217)",
    "dept": "EST",
    "period": 5,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "orig_MEC077_Terça_17/19_5",
    "code": "MEC077",
    "name": "Top dos Materiais\nMEC077 (4148)",
    "text": "Top dos Materiais\nMEC077 (4148)",
    "dept": "MEC",
    "period": 5,
    "day": "Terça",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_ENE077_Quarta_17/19_5",
    "code": "ENE077",
    "name": "ENERGIA E ELETRICIDADE",
    "text": "Energ. Eletr.\nENE077 (5217)",
    "dept": "ENE",
    "period": 5,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "FIS075"
    ]
  },
  {
    "id": "orig_ENE077_Quinta_17/19_5",
    "code": "ENE077",
    "name": "ENERGIA E ELETRICIDADE",
    "text": "Energ. Eletr.\nENE077 (5217)",
    "dept": "ENE",
    "period": 5,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "FIS075"
    ]
  },
  {
    "id": "orig_EXT019_Sexta_17/19_5",
    "code": "EXT019",
    "name": "EXT0196",
    "text": "EXT0196 - Int e Dissemin do Conhec em EP (5134)",
    "dept": "EXT",
    "period": 5,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_FIS081_Segunda_19/21_5",
    "code": "FIS081",
    "name": "FENÔMENOS DE TRANSPORTE",
    "text": "Fenômenos dos Transportes - FIS081",
    "dept": "FIS",
    "period": 5,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIS074",
      "MAT157"
    ]
  },
  {
    "id": "orig_EPD067_Terça_19/21_5",
    "code": "EPD067",
    "name": "ENGENHARIA DA QUALIDADE I",
    "text": "Eng. Qualidade I\nEPD067 (4265)",
    "dept": "EPD",
    "period": 5,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Clarice",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_FIS081_Quarta_19/21_5",
    "code": "FIS081",
    "name": "FENÔMENOS DE TRANSPORTE",
    "text": "Fenômenos dos Transportes - FIS081",
    "dept": "FIS",
    "period": 5,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIS074",
      "MAT157"
    ]
  },
  {
    "id": "orig_EST061_Quinta_19/21_5",
    "code": "EST061",
    "name": "ESTATÍSTICA APLICADA À ENGENHARIA I",
    "text": "Estatíst. Aplic.\nEST061 (5217)",
    "dept": "EST",
    "period": 5,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "orig_EPD059_Segunda_21/23_5",
    "code": "EPD059",
    "name": "GESTÃO DO PROJETO",
    "text": "Gest. Projeto\nEPD059 (4265)",
    "dept": "EPD",
    "period": 5,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Roberta",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "orig_MEC077_Terça_21/23_5",
    "code": "MEC077",
    "name": "Top dos Materiais\nMEC077 (4148)",
    "text": "Top dos Materiais\nMEC077 (4148)",
    "dept": "MEC",
    "period": 5,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD067_Quinta_21/23_5",
    "code": "EPD067",
    "name": "ENGENHARIA DA QUALIDADE I",
    "text": "Eng. Qualidade I\nEPD067 (4265)",
    "dept": "EPD",
    "period": 5,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Clarice",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "orig_MAC015_Segunda_17/19_6",
    "code": "MAC015",
    "name": "RESISTÊNCIA DOS MATERIAIS",
    "text": "Res Materiais\nMAC015 (4148 A3)",
    "dept": "MAC",
    "period": 6,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "orig_EPD068_Terça_17/19_6",
    "code": "EPD068",
    "name": "ENGENHARIA DA QUALIDADE II",
    "text": "Eng. Qualidade II - EPD068 (4265)",
    "dept": "EPD",
    "period": 6,
    "day": "Terça",
    "slot": "17/19",
    "professor": "Clarice",
    "prereqs": [
      "EST061",
      "EPD067"
    ]
  },
  {
    "id": "orig_MAC015_Quarta_17/19_6",
    "code": "MAC015",
    "name": "RESISTÊNCIA DOS MATERIAIS",
    "text": "Res Materiais\nMAC015 (4148 A3)",
    "dept": "MAC",
    "period": 6,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "orig_EPD117_Quinta_17/19_6",
    "code": "EPD117",
    "name": "ENGENHARIA DE PRODUTO",
    "text": "Engenharia do Produto - EPD117 (4265)",
    "dept": "EPD",
    "period": 6,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "Roberta",
    "prereqs": [
      "EPD059"
    ]
  },
  {
    "id": "orig_EPD074_Segunda_19/21_6",
    "code": "EPD074",
    "name": "PROCESSOS PRODUTIVOS",
    "text": "Proc. Produtivo \nEPD074 (5110)",
    "dept": "EPD",
    "period": 6,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Marcio",
    "prereqs": [
      "ENE077",
      "EPD075",
      "EPD010"
    ]
  },
  {
    "id": "orig_EPD099_Terça_19/21_6",
    "code": "EPD099",
    "name": "PESQUISA OPERACIONAL I",
    "text": "PO 1\nEPD099 (5102)",
    "dept": "EPD",
    "period": 6,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Fernando",
    "prereqs": [
      "MAT029",
      "DCC008"
    ]
  },
  {
    "id": "orig_EPD026_Quarta_19/21_6",
    "code": "EPD026",
    "name": "PLANEJAMENTO ESTRATÉGICO",
    "text": "Planej. Estratégico\nEPD026 (5134)",
    "dept": "EPD",
    "period": 6,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Luiz",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "orig_EPD068_Quinta_19/21_6",
    "code": "EPD068",
    "name": "ENGENHARIA DA QUALIDADE II",
    "text": "Eng. Qualidade II - EPD068 (LTI 3)",
    "dept": "EPD",
    "period": 6,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Clarice",
    "prereqs": [
      "EST061",
      "EPD067"
    ]
  },
  {
    "id": "orig_EPD117_Sexta_19/21_6",
    "code": "EPD117",
    "name": "ENGENHARIA DE PRODUTO",
    "text": "Engenharia do Produto - EPD117 (4265)",
    "dept": "EPD",
    "period": 6,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Roberta",
    "prereqs": [
      "EPD059"
    ]
  },
  {
    "id": "orig_EPD026_Segunda_21/23_6",
    "code": "EPD026",
    "name": "PLANEJAMENTO ESTRATÉGICO",
    "text": "Planej. Estratégico\nEPD026 (5134)",
    "dept": "EPD",
    "period": 6,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Luiz",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "orig_EPD074_Quarta_21/23_6",
    "code": "EPD074",
    "name": "PROCESSOS PRODUTIVOS",
    "text": "Proc. Produtivo \nEPD074 (5110)",
    "dept": "EPD",
    "period": 6,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Marcio",
    "prereqs": [
      "ENE077",
      "EPD075",
      "EPD010"
    ]
  },
  {
    "id": "orig_EPD099_Quinta_21/23_6",
    "code": "EPD099",
    "name": "PESQUISA OPERACIONAL I",
    "text": "PO 1\nEPD099 (5102)",
    "dept": "EPD",
    "period": 6,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Fernando",
    "prereqs": [
      "MAT029",
      "DCC008"
    ]
  },
  {
    "id": "orig_EPD057_Segunda_17/19_7",
    "code": "EPD057",
    "name": "ERGONOMIA",
    "text": "Ergonomia\nEPD057 (4267)",
    "dept": "EPD",
    "period": 7,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "Eduardo",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "orig_CUSTOM_Terça_17/19_7",
    "code": "CUSTOM",
    "name": "Processos de Fabricação      EP5112 (LTI 2)",
    "text": "Processos de Fabricação      EP5112 (LTI 2)",
    "dept": "OUTRO",
    "period": 7,
    "day": "Terça",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EXT195_Quarta_17/19_7",
    "code": "EXT195",
    "name": "CAPACITAÇÃO E TREINAMENTO EM EP",
    "text": "EXT195 - Capacitação e Treinamento em EP (4265)",
    "dept": "EXT",
    "period": 7,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EXT196"
    ]
  },
  {
    "id": "orig_FIN013_Quinta_17/19_7",
    "code": "FIN013",
    "name": "GESTÃO FINANCEIRA I",
    "text": "Gest Fin. EP I\nFIN013 (5110 e LTI 2)",
    "dept": "FIN",
    "period": 7,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "orig_EPD112_Segunda_19/21_7",
    "code": "EPD112",
    "name": "PROCESSOS DE FABRICAÇÃO",
    "text": "Processos de Fabricação      EPD112 (5102)",
    "dept": "EPD",
    "period": 7,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Marcos Borges",
    "prereqs": [
      "EPD117"
    ]
  },
  {
    "id": "orig_EPD080_Terça_19/21_7",
    "code": "EPD080",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO I",
    "text": "PCP I\nEPD080 (5109)",
    "dept": "EPD",
    "period": 7,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Picorone",
    "prereqs": [
      "EPD074"
    ]
  },
  {
    "id": "orig_FIN013_Quarta_19/21_7",
    "code": "FIN013",
    "name": "GESTÃO FINANCEIRA I",
    "text": "Gest Fin. EP I\nFIN013 (5110 e LTI 2)",
    "dept": "FIN",
    "period": 7,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "orig_EPD100_Quinta_19/21_7",
    "code": "EPD100",
    "name": "PESQUISA OPERACIONAL II",
    "text": "PO 2\nEPD100 (5101)",
    "dept": "EPD",
    "period": 7,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Fernando",
    "prereqs": [
      "EPD099"
    ]
  },
  {
    "id": "orig_EPD080_Sexta_19/21_7",
    "code": "EPD080",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO I",
    "text": "PCP I\nEPD080 (5109)",
    "dept": "EPD",
    "period": 7,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Picorone",
    "prereqs": [
      "EPD074"
    ]
  },
  {
    "id": "orig_EPD100_Terça_21/23_7",
    "code": "EPD100",
    "name": "PESQUISA OPERACIONAL II",
    "text": "PO 2\nEPD100 (5101)",
    "dept": "EPD",
    "period": 7,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Fernando",
    "prereqs": [
      "EPD099"
    ]
  },
  {
    "id": "orig_EPD057_Quarta_21/23_7",
    "code": "EPD057",
    "name": "ERGONOMIA",
    "text": "Ergonomia\nEPD057 (4267)",
    "dept": "EPD",
    "period": 7,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Eduardo",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "orig_CUSTOM_Quinta_21/23_7",
    "code": "CUSTOM",
    "name": "Prototipagem Virtual EPD 113 (LTI 2)",
    "text": "Prototipagem Virtual EPD 113 (LTI 2)",
    "dept": "EPD",
    "period": 7,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD076_Segunda_17/19_8",
    "code": "EPD076",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO II",
    "text": "PCP II\nEPD076 (5101)",
    "dept": "EPD",
    "period": 8,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "Marcio",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "orig_EPD101_Terça_17/19_8",
    "code": "EPD101",
    "name": "ENGENHARIA ECONÔMICA I",
    "text": "Eng. Econômica I\nEPD101 (5109)",
    "dept": "EPD",
    "period": 8,
    "day": "Terça",
    "slot": "17/19",
    "professor": "Cristina",
    "prereqs": [
      "EST061",
      "MAT154"
    ]
  },
  {
    "id": "orig_EPD108_Quarta_17/19_8",
    "code": "EPD108",
    "name": "METODOLOGIA CIENTÍFICA E TECNOLÓGICA",
    "text": "Metodologia Cient e Tec e Qualify - EPD108 (5101)",
    "dept": "EPD",
    "period": 8,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "Marcos Rodrigues",
    "prereqs": []
  },
  {
    "id": "orig_EPD101_Quinta_17/19_8",
    "code": "EPD101",
    "name": "ENGENHARIA ECONÔMICA I",
    "text": "Eng. Econômica I\nEPD101 (5134 / LTI 3)",
    "dept": "EPD",
    "period": 8,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "Cristina",
    "prereqs": [
      "EST061",
      "MAT154"
    ]
  },
  {
    "id": "orig_FIN014_Segunda_19/21_8",
    "code": "FIN014",
    "name": "GESTÃO FINANCEIRA II",
    "text": "Gest Fin. EP II\nFIN014 (5217 e LTI 2)",
    "dept": "FIN",
    "period": 8,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIN013"
    ]
  },
  {
    "id": "orig_ESA011_Terça_19/21_8",
    "code": "ESA011",
    "name": "FUND. DE SEGURANÇA NO TRABALHO",
    "text": "Fund. Seg Trab.\nESA011  (5217)",
    "dept": "ESA",
    "period": 8,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EPD065"
    ]
  },
  {
    "id": "orig_EPD076_Quarta_19/21_8",
    "code": "EPD076",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO II",
    "text": "PCP II\nEPD076 (5101)",
    "dept": "EPD",
    "period": 8,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Marcio",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "orig_EPD104_Quinta_19/21_8",
    "code": "EPD104",
    "name": "ENGENHARIA DA SUSTENTABILIDADE II",
    "text": "Eng Sustentabilidade II - EPD104 (5109)",
    "dept": "EPD",
    "period": 8,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Bruno",
    "prereqs": [
      "EPD065",
      "EPD026"
    ]
  },
  {
    "id": "orig_EPD129_Sexta_19/21_8",
    "code": "EPD129",
    "name": "GESTÃO DA TECNOLOGIA E INOVAÇÃO",
    "text": "Gestão da Tec e Inovação - EPD129 (5134)",
    "dept": "EPD",
    "period": 8,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Mariana",
    "prereqs": [
      "EPD117"
    ]
  },
  {
    "id": "orig_EPD097_Terça_21/23_8",
    "code": "EPD097",
    "name": "ENGENHARIA E SOCIEDADE",
    "text": "Engenharia e Sociedade EPD097 (5110)",
    "dept": "EPD",
    "period": 8,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Marcos Rodrigues",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "orig_FIN014_Quarta_21/23_8",
    "code": "FIN014",
    "name": "GESTÃO FINANCEIRA II",
    "text": "Gest Fin. EP II\nFIN014 (5217 e LTI 2)",
    "dept": "FIN",
    "period": 8,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "FIN013"
    ]
  },
  {
    "id": "orig_EPD069_Quinta_17/19_9",
    "code": "EPD069",
    "name": "LOGÍSTICA I",
    "text": "Logística I\nEPD069 (5101)",
    "dept": "EPD",
    "period": 9,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "Roberto",
    "prereqs": [
      "EPD099",
      "EST061"
    ]
  },
  {
    "id": "orig_EPD069_Segunda_19/21_9",
    "code": "EPD069",
    "name": "LOGÍSTICA I",
    "text": "Logística I\nEPD069 (5101)",
    "dept": "EPD",
    "period": 9,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Roberto",
    "prereqs": [
      "EPD099",
      "EST061"
    ]
  },
  {
    "id": "orig_EPD053_Terça_19/21_9",
    "code": "EPD053",
    "name": "EMPREENDEDORISMO",
    "text": "Empreendedorismo\nEPD053 (5134)",
    "dept": "EPD",
    "period": 9,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Mariana",
    "prereqs": [
      "EPD129"
    ]
  },
  {
    "id": "orig_MEC076_Quarta_19/21_9",
    "code": "MEC076",
    "name": "Automação\nMEC076 (LAB AUTO)",
    "text": "Automação\nMEC076 (LAB AUTO)",
    "dept": "MEC",
    "period": 9,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD102_Quinta_19/21_9",
    "code": "EPD102",
    "name": "ENGENHARIA ECONÔMICA II",
    "text": "Eng. Econômica II\nEPD102 (5102 e LTI 2)",
    "dept": "EPD",
    "period": 9,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Cristina",
    "prereqs": [
      "EPD101",
      "FIN014"
    ]
  },
  {
    "id": "orig_EPD102_Terça_21/23_9",
    "code": "EPD102",
    "name": "ENGENHARIA ECONÔMICA II",
    "text": "Eng. Econômica II\nEPD102 (5102 e LTI 3)",
    "dept": "EPD",
    "period": 9,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Cristina",
    "prereqs": [
      "EPD101",
      "FIN014"
    ]
  },
  {
    "id": "orig_MEC076_Quarta_21/23_9",
    "code": "MEC076",
    "name": "Automação\nMEC076 (LAB AUTO)",
    "text": "Automação\nMEC076 (LAB AUTO)",
    "dept": "MEC",
    "period": 9,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "orig_EPD103_Quinta_21/23_9",
    "code": "EPD103",
    "name": "REDES DE PRODUÇÃO",
    "text": "Redes de Produção\nEPD103 (5134)",
    "dept": "EPD",
    "period": 9,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Bruno",
    "prereqs": [
      "EPD065",
      "EPD026"
    ]
  },
  {
    "id": "orig_EPD106_Quarta_17/19_10",
    "code": "EPD106",
    "name": "GESTÃO DE MANUTENÇÕES",
    "text": "Gestão da Manutenção - EPD106 (5134)",
    "dept": "EPD",
    "period": 10,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "Luiz",
    "prereqs": [
      "EPD010"
    ]
  },
  {
    "id": "orig_EPD119_Sexta_17/19_10",
    "code": "EPD119",
    "name": "PLANEJAMENTO DE INSTALAÇÕES",
    "text": "Planej. de Instalações EPD119 (5109)",
    "dept": "EPD",
    "period": 10,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "Picorone",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "orig_EPD106_Segunda_19/21_10",
    "code": "EPD106",
    "name": "GESTÃO DE MANUTENÇÕES",
    "text": "Gestão da Manutenção - EPD106 (5134)",
    "dept": "EPD",
    "period": 10,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Luiz",
    "prereqs": [
      "EPD010"
    ]
  },
  {
    "id": "orig_EPD070_Terça_19/21_10",
    "code": "EPD070",
    "name": "LOGÍSTICA II",
    "text": "Logística II\nEPD070 (5101)",
    "dept": "EPD",
    "period": 10,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Roberto",
    "prereqs": [
      "EPD069"
    ]
  },
  {
    "id": "orig_EPD070_Segunda_21/23_10",
    "code": "EPD070",
    "name": "LOGÍSTICA II",
    "text": "Logística II\nEPD070 (5101)",
    "dept": "EPD",
    "period": 10,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Roberto",
    "prereqs": [
      "EPD069"
    ]
  },
  {
    "id": "orig_EPD119_Terça_21/23_10",
    "code": "EPD119",
    "name": "PLANEJAMENTO DE INSTALAÇÕES",
    "text": "Planej. de Instalações \nEPD119 (5109)",
    "dept": "EPD",
    "period": 10,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Picorone",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  }
];

const PRESET_AJUSTADO = [
  {
    "id": "adj_DC5199_Terça_17/19_1",
    "code": "DC5199",
    "name": "LAB DE ALGORITMOS",
    "dept": "OUTRO",
    "period": 1,
    "day": "Terça",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_DCC199_Segunda_19/21_1",
    "code": "DCC199",
    "name": "ALGORITMOS",
    "dept": "DCC",
    "period": 1,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_DCC199_Quinta_19/21_1",
    "code": "DCC199",
    "name": "ALGORITMOS",
    "dept": "DCC",
    "period": 1,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_EPD108_Segunda_21/23_1",
    "code": "EPD108",
    "name": "METODOLOGIA CIENTÍFICA E TECNOLÓGICA",
    "dept": "EPD",
    "period": 1,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Marcos Rodrigues",
    "prereqs": []
  },
  {
    "id": "adj_EPD110_Terça_21/23_1",
    "code": "EPD110",
    "name": "EXPRESSÃO GRÁFICA I",
    "dept": "EPD",
    "period": 1,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Romir",
    "prereqs": []
  },
  {
    "id": "adj_EPD130_Quinta_21/23_1",
    "code": "EPD130",
    "name": "INTRODUÇÃO À ENG. DE PRODUÇÃO",
    "dept": "EPD",
    "period": 1,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Roberta",
    "prereqs": []
  },
  {
    "id": "adj_FIS122_Quinta_17/19_1",
    "code": "FIS122",
    "name": "LAB DE TRANSFORMAÇÕES FÍSICAS",
    "dept": "FIS",
    "period": 1,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_MAT154_Quarta_19/21_1",
    "code": "MAT154",
    "name": "CÁLCULO I",
    "dept": "MAT",
    "period": 1,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_MAT154_Sexta_21/23_1",
    "code": "MAT154",
    "name": "CÁLCULO I",
    "dept": "MAT",
    "period": 1,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_MAT155_Quarta_21/23_1",
    "code": "MAT155",
    "name": "GEOMETRIA ANALÍTICA",
    "dept": "MAT",
    "period": 1,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_MAT155_Sexta_19/21_1",
    "code": "MAT155",
    "name": "GEOMETRIA ANALÍTICA",
    "dept": "MAT",
    "period": 1,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_QUI126_Terça_19/21_1",
    "code": "QUI126",
    "name": "LAB DE ESTRUTURAS QUIMICAS",
    "dept": "QUI",
    "period": 1,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_EPD111_Quarta_21/23_2",
    "code": "EPD111",
    "name": "TRATAMENTO E ANÁLISE DE DADOS I",
    "dept": "EPD",
    "period": 2,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Romir",
    "prereqs": [
      "DCC199"
    ]
  },
  {
    "id": "adj_EXT194_Sábado_19/21_2",
    "code": "EXT194",
    "name": "EXTENSIONISTA 3º SETOR",
    "dept": "EXT",
    "period": 2,
    "day": "Sábado",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EPD130"
    ]
  },
  {
    "id": "adj_FIS073_Terça_19/21_2",
    "code": "FIS073",
    "name": "FÍSICA I",
    "dept": "FIS",
    "period": 2,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154"
    ]
  },
  {
    "id": "adj_FIS073_Quinta_19/21_2",
    "code": "FIS073",
    "name": "FÍSICA I",
    "dept": "FIS",
    "period": 2,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154"
    ]
  },
  {
    "id": "adj_FIS077_Segunda_19/21_2",
    "code": "FIS077",
    "name": "LAB DE FÍSICA I",
    "dept": "FIS",
    "period": 2,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_MAT156_Quarta_19/21_2",
    "code": "MAT156",
    "name": "CÁLCULO II",
    "dept": "MAT",
    "period": 2,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT155",
      "MAT154"
    ]
  },
  {
    "id": "adj_MAT156_Sexta_21/23_2",
    "code": "MAT156",
    "name": "CÁLCULO II",
    "dept": "MAT",
    "period": 2,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT155",
      "MAT154"
    ]
  },
  {
    "id": "adj_MAT158_Terça_21/23_2",
    "code": "MAT158",
    "name": "ÁLGEBRA LINEAR",
    "dept": "MAT",
    "period": 2,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT155"
    ]
  },
  {
    "id": "adj_MAT158_Sexta_19/21_2",
    "code": "MAT158",
    "name": "ÁLGEBRA LINEAR",
    "dept": "MAT",
    "period": 2,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT155"
    ]
  },
  {
    "id": "adj_QUI125_Segunda_21/23_2",
    "code": "QUI125",
    "name": "QUÍMICA",
    "dept": "QUI",
    "period": 2,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_QUI125_Quinta_21/23_2",
    "code": "QUI125",
    "name": "QUÍMICA",
    "dept": "QUI",
    "period": 2,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_CAD014_Segunda_19/21_3",
    "code": "CAD014",
    "name": "ADM. E ORGANIZAÇÃO DE EMPRESAS",
    "dept": "CAD",
    "period": 3,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_CAD014_Segunda_21/23_3",
    "code": "CAD014",
    "name": "ADM. E ORGANIZAÇÃO DE EMPRESAS",
    "dept": "CAD",
    "period": 3,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_EPD115_Sexta_19/21_3",
    "code": "EPD115",
    "name": "TRATAMENTO E ANÁLISE DE DADOS II",
    "dept": "EPD",
    "period": 3,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Romir",
    "prereqs": [
      "EPD111"
    ]
  },
  {
    "id": "adj_EST028_Terça_21/23_3",
    "code": "EST028",
    "name": "INTRODUÇÃO À ESTATÍSTICA",
    "dept": "EST",
    "period": 3,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_EST028_Quinta_21/23_3",
    "code": "EST028",
    "name": "INTRODUÇÃO À ESTATÍSTICA",
    "dept": "EST",
    "period": 3,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": []
  },
  {
    "id": "adj_FIS074_Terça_19/21_3",
    "code": "FIS074",
    "name": "FÍSICA II",
    "dept": "FIS",
    "period": 3,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154",
      "FIS073"
    ]
  },
  {
    "id": "adj_FIS074_Quinta_19/21_3",
    "code": "FIS074",
    "name": "FÍSICA II",
    "dept": "FIS",
    "period": 3,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT154",
      "FIS073"
    ]
  },
  {
    "id": "adj_FIS078_Quarta_21/23_3",
    "code": "FIS078",
    "name": "LAB DE FÍSICA II",
    "dept": "FIS",
    "period": 3,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "FIS077",
      "FIS073"
    ]
  },
  {
    "id": "adj_MAT157_Quarta_19/21_3",
    "code": "MAT157",
    "name": "CÁLCULO III",
    "dept": "MAT",
    "period": 3,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "adj_MAT157_Sexta_21/23_3",
    "code": "MAT157",
    "name": "CÁLCULO III",
    "dept": "MAT",
    "period": 3,
    "day": "Sexta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "adj_DCC008_Segunda_21/23_4",
    "code": "DCC008",
    "name": "CÁLCULO NUMÉRICO",
    "dept": "DCC",
    "period": 4,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "DCC199",
      "MAT154",
      "MAT158"
    ]
  },
  {
    "id": "adj_DCC008_Quinta_21/23_4",
    "code": "DCC008",
    "name": "CÁLCULO NUMÉRICO",
    "dept": "DCC",
    "period": 4,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "DCC199",
      "MAT154",
      "MAT158"
    ]
  },
  {
    "id": "adj_EPD075_Segunda_19/21_4",
    "code": "EPD075",
    "name": "ORGANIZAÇÃO DO TRABALHO E PRODUÇÃO",
    "dept": "EPD",
    "period": 4,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Eduardo",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD075_Quarta_19/21_4",
    "code": "EPD075",
    "name": "ORGANIZAÇÃO DO TRABALHO E PRODUÇÃO",
    "dept": "EPD",
    "period": 4,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Eduardo",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD116_Terça_21/23_4",
    "code": "EPD116",
    "name": "TRATAMENTO E ANÁLISE DE DADOS III",
    "dept": "EPD",
    "period": 4,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Mariana",
    "prereqs": [
      "EPD115",
      "EST028"
    ]
  },
  {
    "id": "adj_FIS075_Terça_19/21_4",
    "code": "FIS075",
    "name": "FÍSICA III",
    "dept": "FIS",
    "period": 4,
    "day": "Terça",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156",
      "FIS073"
    ]
  },
  {
    "id": "adj_FIS075_Quinta_19/21_4",
    "code": "FIS075",
    "name": "FÍSICA III",
    "dept": "FIS",
    "period": 4,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156",
      "FIS073"
    ]
  },
  {
    "id": "adj_MAT029_Quarta_21/23_4",
    "code": "MAT029",
    "name": "EQUAÇÕES DIFERENCIAIS I",
    "dept": "MAT",
    "period": 4,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "adj_MAT029_Sexta_19/21_4",
    "code": "MAT029",
    "name": "EQUAÇÕES DIFERENCIAIS I",
    "dept": "MAT",
    "period": 4,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "MAT156"
    ]
  },
  {
    "id": "adj_ENE077_Quarta_17/19_5",
    "code": "ENE077",
    "name": "ENERGIA E ELETRICIDADE",
    "dept": "ENE",
    "period": 5,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "FIS075"
    ]
  },
  {
    "id": "adj_ENE077_Quinta_17/19_5",
    "code": "ENE077",
    "name": "ENERGIA E ELETRICIDADE",
    "dept": "ENE",
    "period": 5,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "FIS075"
    ]
  },
  {
    "id": "adj_EPD010_Quinta_21/23_5",
    "code": "EPD010",
    "name": "ENGENHARIA DE MATERIAIS",
    "dept": "EPD",
    "period": 5,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "QUI125",
      "QUI126"
    ]
  },
  {
    "id": "adj_EPD010_Terça_21/23_5",
    "code": "EPD010",
    "name": "ENGENHARIA DE MATERIAIS",
    "dept": "EPD",
    "period": 5,
    "day": "Terça",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "QUI125",
      "QUI126"
    ]
  },
  {
    "id": "adj_EPD059_Segunda_21/23_5",
    "code": "EPD059",
    "name": "GESTÃO DO PROJETO",
    "dept": "EPD",
    "period": 5,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Roberta",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "adj_EPD067_Terça_19/21_5",
    "code": "EPD067",
    "name": "ENGENHARIA DA QUALIDADE I",
    "dept": "EPD",
    "period": 5,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Clarice",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD067_Quarta_21/23_5",
    "code": "EPD067",
    "name": "ENGENHARIA DA QUALIDADE I",
    "dept": "EPD",
    "period": 5,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Clarice",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD114_Sexta_19/21_5",
    "code": "EPD114",
    "name": "EXPRESSÃO GRÁFICA II",
    "dept": "EPD",
    "period": 5,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Marcos Borges",
    "prereqs": [
      "EPD110"
    ]
  },
  {
    "id": "adj_EST061_Segunda_17/19_5",
    "code": "EST061",
    "name": "ESTATÍSTICA APLICADA À ENGENHARIA I",
    "dept": "EST",
    "period": 5,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "adj_EST061_Quinta_19/21_5",
    "code": "EST061",
    "name": "ESTATÍSTICA APLICADA À ENGENHARIA I",
    "dept": "EST",
    "period": 5,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "adj_EXT196_Sábado_19/21_5",
    "code": "EXT196",
    "name": "INTEGRAÇÃO E DISSEMINAÇÃO DO CONHECIMENTO",
    "dept": "EXT",
    "period": 5,
    "day": "Sábado",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EXT194"
    ]
  },
  {
    "id": "adj_FIS081_Segunda_19/21_5",
    "code": "FIS081",
    "name": "FENÔMENOS DE TRANSPORTE",
    "dept": "FIS",
    "period": 5,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIS074",
      "MAT157"
    ]
  },
  {
    "id": "adj_FIS081_Quarta_19/21_5",
    "code": "FIS081",
    "name": "FENÔMENOS DE TRANSPORTE",
    "dept": "FIS",
    "period": 5,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIS074",
      "MAT157"
    ]
  },
  {
    "id": "adj_EPD026_Segunda_21/23_6",
    "code": "EPD026",
    "name": "PLANEJAMENTO ESTRATÉGICO",
    "dept": "EPD",
    "period": 6,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Luiz",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "adj_EPD026_Terça_21/23_6",
    "code": "EPD026",
    "name": "PLANEJAMENTO ESTRATÉGICO",
    "dept": "EPD",
    "period": 6,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Luiz",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "adj_EPD065_Quarta_21/23_6",
    "code": "EPD065",
    "name": "ENGENHARIA DA SUSTENTABILIDADE I",
    "dept": "EPD",
    "period": 6,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Bruno",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD065_Sexta_17/19_6",
    "code": "EPD065",
    "name": "ENGENHARIA DA SUSTENTABILIDADE I",
    "dept": "EPD",
    "period": 6,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "Bruno",
    "prereqs": [
      "CAD014"
    ]
  },
  {
    "id": "adj_EPD074_Segunda_19/21_6",
    "code": "EPD074",
    "name": "PROCESSOS PRODUTIVOS",
    "dept": "EPD",
    "period": 6,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Marcio",
    "prereqs": [
      "ENE077",
      "EPD075",
      "EPD010"
    ]
  },
  {
    "id": "adj_EPD074_Quinta_21/23_6",
    "code": "EPD074",
    "name": "PROCESSOS PRODUTIVOS",
    "dept": "EPD",
    "period": 6,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Marcio",
    "prereqs": [
      "ENE077",
      "EPD075",
      "EPD010"
    ]
  },
  {
    "id": "adj_EPD099_Terça_19/21_6",
    "code": "EPD099",
    "name": "PESQUISA OPERACIONAL I",
    "dept": "EPD",
    "period": 6,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Fernando",
    "prereqs": [
      "MAT029",
      "DCC008"
    ]
  },
  {
    "id": "adj_EPD099_Sexta_19/21_6",
    "code": "EPD099",
    "name": "PESQUISA OPERACIONAL I",
    "dept": "EPD",
    "period": 6,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Fernando",
    "prereqs": [
      "MAT029",
      "DCC008"
    ]
  },
  {
    "id": "adj_EPD117_Quinta_19/21_6",
    "code": "EPD117",
    "name": "ENGENHARIA DE PRODUTO",
    "dept": "EPD",
    "period": 6,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Roberta",
    "prereqs": [
      "EPD059"
    ]
  },
  {
    "id": "adj_EPD117_Quarta_19/21_6",
    "code": "EPD117",
    "name": "ENGENHARIA DE PRODUTO",
    "dept": "EPD",
    "period": 6,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Roberta",
    "prereqs": [
      "EPD059"
    ]
  },
  {
    "id": "adj_MAC015_Segunda_17/19_6",
    "code": "MAC015",
    "name": "RESISTÊNCIA DOS MATERIAIS",
    "dept": "MAC",
    "period": 6,
    "day": "Segunda",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "adj_MAC015_Quarta_17/19_6",
    "code": "MAC015",
    "name": "RESISTÊNCIA DOS MATERIAIS",
    "dept": "MAC",
    "period": 6,
    "day": "Quarta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "adj_EPD057_Terça_21/23_7",
    "code": "EPD057",
    "name": "ERGONOMIA",
    "dept": "EPD",
    "period": 7,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Eduardo",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "adj_EPD057_Quinta_21/23_7",
    "code": "EPD057",
    "name": "ERGONOMIA",
    "dept": "EPD",
    "period": 7,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Eduardo",
    "prereqs": [
      "EPD075"
    ]
  },
  {
    "id": "adj_EPD080_Terça_19/21_7",
    "code": "EPD080",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO I",
    "dept": "EPD",
    "period": 7,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Picorone",
    "prereqs": [
      "EPD074"
    ]
  },
  {
    "id": "adj_EPD080_Sexta_19/21_7",
    "code": "EPD080",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO I",
    "dept": "EPD",
    "period": 7,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Picorone",
    "prereqs": [
      "EPD074"
    ]
  },
  {
    "id": "adj_EPD100_Segunda_21/23_7",
    "code": "EPD100",
    "name": "PESQUISA OPERACIONAL II",
    "dept": "EPD",
    "period": 7,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Fernando",
    "prereqs": [
      "EPD099"
    ]
  },
  {
    "id": "adj_EPD100_Quinta_19/21_7",
    "code": "EPD100",
    "name": "PESQUISA OPERACIONAL II",
    "dept": "EPD",
    "period": 7,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Fernando",
    "prereqs": [
      "EPD099"
    ]
  },
  {
    "id": "adj_EPD112_Segunda_19/21_7",
    "code": "EPD112",
    "name": "PROCESSOS DE FABRICAÇÃO",
    "dept": "EPD",
    "period": 7,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Marcos Borges",
    "prereqs": [
      "EPD117"
    ]
  },
  {
    "id": "adj_EXT195_Sábado_19/21_7",
    "code": "EXT195",
    "name": "CAPACITAÇÃO E TREINAMENTO EM EP",
    "dept": "EXT",
    "period": 7,
    "day": "Sábado",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EXT196"
    ]
  },
  {
    "id": "adj_FIN013_Quarta_19/21_7",
    "code": "FIN013",
    "name": "GESTÃO FINANCEIRA I",
    "dept": "FIN",
    "period": 7,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "adj_FIN013_Quinta_17/19_7",
    "code": "FIN013",
    "name": "GESTÃO FINANCEIRA I",
    "dept": "FIN",
    "period": 7,
    "day": "Quinta",
    "slot": "17/19",
    "professor": "",
    "prereqs": [
      "EST028"
    ]
  },
  {
    "id": "adj_EPD076_Terça_21/23_8",
    "code": "EPD076",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO II",
    "dept": "EPD",
    "period": 8,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Marcio",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "adj_EPD076_Sexta_17/19_8",
    "code": "EPD076",
    "name": "PLANEJAMENTO E CONTROLE DA PRODUÇÃO II",
    "dept": "EPD",
    "period": 8,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "Marcio",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "adj_EPD101_Segunda_21/23_8",
    "code": "EPD101",
    "name": "ENGENHARIA ECONÔMICA I",
    "dept": "EPD",
    "period": 8,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Cristina",
    "prereqs": [
      "EST061",
      "MAT154"
    ]
  },
  {
    "id": "adj_EPD101_Terça_19/21_8",
    "code": "EPD101",
    "name": "ENGENHARIA ECONÔMICA I",
    "dept": "EPD",
    "period": 8,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Cristina",
    "prereqs": [
      "EST061",
      "MAT154"
    ]
  },
  {
    "id": "adj_EPD104_Quinta_19/21_8",
    "code": "EPD104",
    "name": "ENGENHARIA DA SUSTENTABILIDADE II",
    "dept": "EPD",
    "period": 8,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Bruno",
    "prereqs": [
      "EPD065",
      "EPD026"
    ]
  },
  {
    "id": "adj_EPD129_Sexta_19/21_8",
    "code": "EPD129",
    "name": "GESTÃO DA TECNOLOGIA E INOVAÇÃO",
    "dept": "EPD",
    "period": 8,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Mariana",
    "prereqs": [
      "EPD117"
    ]
  },
  {
    "id": "adj_ESA011_Quarta_19/21_8",
    "code": "ESA011",
    "name": "FUND. DE SEGURANÇA NO TRABALHO",
    "dept": "ESA",
    "period": 8,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "EPD065"
    ]
  },
  {
    "id": "adj_ESA011_Quinta_21/23_8",
    "code": "ESA011",
    "name": "FUND. DE SEGURANÇA NO TRABALHO",
    "dept": "ESA",
    "period": 8,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "EPD065"
    ]
  },
  {
    "id": "adj_FIN014_Segunda_19/21_8",
    "code": "FIN014",
    "name": "GESTÃO FINANCEIRA II",
    "dept": "FIN",
    "period": 8,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "",
    "prereqs": [
      "FIN013"
    ]
  },
  {
    "id": "adj_FIN014_Quarta_21/23_8",
    "code": "FIN014",
    "name": "GESTÃO FINANCEIRA II",
    "dept": "FIN",
    "period": 8,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "FIN013"
    ]
  },
  {
    "id": "adj_EPD030_Quarta_21/23_9",
    "code": "EPD030",
    "name": "AUTOMAÇÃO DA PRODUÇÃO",
    "dept": "EPD",
    "period": 9,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "EPD116",
      "ENE077"
    ]
  },
  {
    "id": "adj_EPD030_Quinta_21/23_9",
    "code": "EPD030",
    "name": "AUTOMAÇÃO DA PRODUÇÃO",
    "dept": "EPD",
    "period": 9,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "",
    "prereqs": [
      "EPD116",
      "ENE077"
    ]
  },
  {
    "id": "adj_EPD053_Terça_19/21_9",
    "code": "EPD053",
    "name": "EMPREENDEDORISMO",
    "dept": "EPD",
    "period": 9,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Mariana",
    "prereqs": [
      "EPD129"
    ]
  },
  {
    "id": "adj_EPD068_Terça_21/23_9",
    "code": "EPD068",
    "name": "ENGENHARIA DA QUALIDADE II",
    "dept": "EPD",
    "period": 9,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Clarice",
    "prereqs": [
      "EST061",
      "EPD067"
    ]
  },
  {
    "id": "adj_EPD068_Quarta_19/21_9",
    "code": "EPD068",
    "name": "ENGENHARIA DA QUALIDADE II",
    "dept": "EPD",
    "period": 9,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Clarice",
    "prereqs": [
      "EST061",
      "EPD067"
    ]
  },
  {
    "id": "adj_EPD069_Segunda_19/21_9",
    "code": "EPD069",
    "name": "LOGÍSTICA I",
    "dept": "EPD",
    "period": 9,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Roberto",
    "prereqs": [
      "EPD099",
      "EST061"
    ]
  },
  {
    "id": "adj_EPD069_Quinta_19/21_9",
    "code": "EPD069",
    "name": "LOGÍSTICA I",
    "dept": "EPD",
    "period": 9,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Roberto",
    "prereqs": [
      "EPD099",
      "EST061"
    ]
  },
  {
    "id": "adj_EPD102_Sexta_19/21_9",
    "code": "EPD102",
    "name": "ENGENHARIA ECONÔMICA II",
    "dept": "EPD",
    "period": 9,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Cristina",
    "prereqs": [
      "EPD101",
      "FIN014"
    ]
  },
  {
    "id": "adj_EPD102_Sexta_17/19_9",
    "code": "EPD102",
    "name": "ENGENHARIA ECONÔMICA II",
    "dept": "EPD",
    "period": 9,
    "day": "Sexta",
    "slot": "17/19",
    "professor": "Cristina",
    "prereqs": [
      "EPD101",
      "FIN014"
    ]
  },
  {
    "id": "adj_EPD113_Segunda_21/23_9",
    "code": "EPD113",
    "name": "PROTOTIPAGEM VIRTUAL",
    "dept": "EPD",
    "period": 9,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Marcos Borges",
    "prereqs": [
      "EPD114"
    ]
  },
  {
    "id": "adj_EP5112_Quarta_21/23_10",
    "code": "EP5112",
    "name": "LAB DE PROCESSOS DE FABRICAÇÃO",
    "dept": "OUTRO",
    "period": 10,
    "day": "Quarta",
    "slot": "21/23",
    "professor": "Marcos Borges",
    "prereqs": []
  },
  {
    "id": "adj_EPD070_Segunda_21/23_10",
    "code": "EPD070",
    "name": "LOGÍSTICA II",
    "dept": "EPD",
    "period": 10,
    "day": "Segunda",
    "slot": "21/23",
    "professor": "Roberto",
    "prereqs": [
      "EPD069"
    ]
  },
  {
    "id": "adj_EPD070_Terça_19/21_10",
    "code": "EPD070",
    "name": "LOGÍSTICA II",
    "dept": "EPD",
    "period": 10,
    "day": "Terça",
    "slot": "19/21",
    "professor": "Roberto",
    "prereqs": [
      "EPD069"
    ]
  },
  {
    "id": "adj_EPD097_Segunda_19/21_10",
    "code": "EPD097",
    "name": "ENGENHARIA E SOCIEDADE",
    "dept": "EPD",
    "period": 10,
    "day": "Segunda",
    "slot": "19/21",
    "professor": "Marcos Rodrigues",
    "prereqs": [
      "MAT029"
    ]
  },
  {
    "id": "adj_EPD103_Quarta_19/21_10",
    "code": "EPD103",
    "name": "REDES DE PRODUÇÃO",
    "dept": "EPD",
    "period": 10,
    "day": "Quarta",
    "slot": "19/21",
    "professor": "Bruno",
    "prereqs": [
      "EPD065",
      "EPD026"
    ]
  },
  {
    "id": "adj_EPD106_Quinta_21/23_10",
    "code": "EPD106",
    "name": "GESTÃO DE MANUTENÇÕES",
    "dept": "EPD",
    "period": 10,
    "day": "Quinta",
    "slot": "21/23",
    "professor": "Luiz",
    "prereqs": [
      "EPD010"
    ]
  },
  {
    "id": "adj_EPD106_Sexta_19/21_10",
    "code": "EPD106",
    "name": "GESTÃO DE MANUTENÇÕES",
    "dept": "EPD",
    "period": 10,
    "day": "Sexta",
    "slot": "19/21",
    "professor": "Luiz",
    "prereqs": [
      "EPD010"
    ]
  },
  {
    "id": "adj_EPD119_Terça_21/23_10",
    "code": "EPD119",
    "name": "PLANEJAMENTO DE INSTALAÇÕES",
    "dept": "EPD",
    "period": 10,
    "day": "Terça",
    "slot": "21/23",
    "professor": "Picorone",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  },
  {
    "id": "adj_EPD119_Quinta_19/21_10",
    "code": "EPD119",
    "name": "PLANEJAMENTO DE INSTALAÇÕES",
    "dept": "EPD",
    "period": 10,
    "day": "Quinta",
    "slot": "19/21",
    "professor": "Picorone",
    "prereqs": [
      "EPD099",
      "EPD080"
    ]
  }
];

const DEFAULT_TEACHERS = [
  {
    "id": "t_roberta",
    "name": "Roberta",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD130, EPD059, EPD117"
  },
  {
    "id": "t_romir",
    "name": "Romir",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD111, EPD110, EPD115"
  },
  {
    "id": "t_marcos_b",
    "name": "Marcos Borges",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD114, EPD112, EP5112, EPD113"
  },
  {
    "id": "t_eduardo",
    "name": "Eduardo",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD075, EPD057"
  },
  {
    "id": "t_mariana",
    "name": "Mariana",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD116, EPD129, EPD053"
  },
  {
    "id": "t_bruno",
    "name": "Bruno",
    "allowedDays": [
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "Apenas Quarta, Quinta e Sexta! (EPD065, EPD104, EPD103)"
  },
  {
    "id": "t_clarice",
    "name": "Clarice",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta"
    ],
    "notes": "Sem aulas na Sexta! (EPD067, EPD068)"
  },
  {
    "id": "t_marcio",
    "name": "Marcio",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD074, EPD076"
  },
  {
    "id": "t_luiz",
    "name": "Luiz",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD026, EPD106"
  },
  {
    "id": "t_fernando",
    "name": "Fernando",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD099, EPD100"
  },
  {
    "id": "t_picorone",
    "name": "Picorone",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD080, EPD119"
  },
  {
    "id": "t_cristina",
    "name": "Cristina",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD101, EPD102"
  },
  {
    "id": "t_marcos_r",
    "name": "Marcos Rodrigues",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD097, EPD108"
  },
  {
    "id": "t_roberto",
    "name": "Roberto",
    "allowedDays": [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta"
    ],
    "notes": "EPD069, EPD070"
  }
];
