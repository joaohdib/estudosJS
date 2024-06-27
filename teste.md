# Jogo Review Scraper

Este projeto é uma aplicação em Python que permite aos usuários visualizar informações detalhadas sobre jogos do Nintendo Switch e Xbox One. A aplicação faz scraping de dados de dois sites principais, Nintendo Life e MobyGames, para fornecer informações como título do jogo, desenvolvedora, publicadora, data de lançamento, avaliação dos usuários, entre outras.

## Funcionalidades

- **Listagem de Jogos**: Lista jogos do Nintendo Switch e Xbox One a partir de sites específicos.
- **Detalhes do Jogo**: Exibe informações detalhadas sobre um jogo selecionado.
- **Navegação**: Permite a navegação por páginas de jogos.
- **Salvamento de Capas**: Salva a capa do jogo selecionado em formato JPEG.

## Requisitos

- Python 3.x
- Bibliotecas:
  - requests
  - BeautifulSoup4

## Instalação

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/seuusuario/seurepo.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seurepo
    ```

3. Instale as dependências:

    ```bash
    pip install requests beautifulsoup4
    ```

## Uso

1. Execute o script principal:

    ```bash
    python main.py
    ```

2. Navegue pelo menu para escolher entre jogos do Nintendo Switch ou Xbox One.
3. Siga as instruções no terminal para visualizar os detalhes do jogo desejado.

## Estrutura do Projeto

- `main.py`: Script principal que contém toda a lógica da aplicação.
- `Jogo.py`: Classe que define a estrutura de um jogo.
- `ListaJogos.py`: Classe que gerencia a lista de jogos.

## Como Funciona

1. **Scraping de Dados**: O script faz scraping dos sites Nintendo Life e MobyGames para obter informações dos jogos.
2. **Armazenamento de Dados**: As informações dos jogos são armazenadas em objetos da classe `Jogo`.
3. **Exibição de Dados**: Os dados são exibidos no terminal e o usuário pode navegar pelas informações e salvar a capa do jogo.

## Melhorias Futuras

- Adicionar suporte a mais plataformas de jogos.
- Implementar uma interface gráfica para melhor usabilidade.
- Melhorar o tratamento de erros e a validação de entradas do usuário.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
