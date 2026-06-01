# PlacaLens 🚗🔍

O **PlacaLens** é um leitor de placas veiculares brasileiras (tanto no padrão Mercosul quanto no modelo antigo) que roda **100% offline e direto no navegador**, utilizando o motor OCR **Tesseract.js** associado a processamento de imagem e regras inteligentes de correção alfanumérica.

---

## ✨ Recursos

*   **Processamento de Imagem Local (Bradley-Roth Adaptive Thresholding)**: Binariza a área da placa sob diferentes condições de luz para destacar as letras e remover sombras.
*   **Multi-Pass OCR**: Executa múltiplas tentativas de leitura (imagem normal, invertida e segmentação esparsa) para obter o melhor resultado.
*   **Correção Alfanumérica por Posição**: Corrige automaticamente leituras de OCR imperfeitas baseando-se no padrão oficial das placas brasileiras:
    *   **Mercosul (`LLLNLNN`)**: Exemplo: Corrige `ABCID23` para `ABC1D23` (pois a 4ª posição deve ser numérica).
    *   **Antiga (`LLLNNNN`)**: Exemplo: Corrige `ABCO123` para `ABC0123` (pois a 4ª posição deve ser numérica).
*   **Exportação em CSV**: Permite exportar a lista de placas detectadas com precisão estimada e data/hora.
*   **100% Gratuito e Offline**: Não requer chaves de API pagas ou conexão ativa com a internet para realizar a leitura.

---

## 📁 Estrutura do Projeto

Os arquivos necessários para o funcionamento e publicação do projeto são:

1.  **`index.html`**: A página web principal contendo a interface do usuário, a captura da câmera, o pré-processamento de imagem e o motor de OCR local.
2.  **`server.js`**: Um servidor estático em Node.js ultraleve, necessário para criar o contexto de segurança (`localhost`) para que o navegador dê acesso à câmera do celular ou computador.
3.  **`iniciar.bat`**: Atalho executável (para Windows) que inicializa o servidor Node.js com apenas dois cliques.

---

## 🚀 Como Executar Localmente

Como os navegadores modernos bloqueiam o acesso à câmera quando abertos diretamente como arquivo local (`file://`), você deve rodar o servidor estático fornecido:

1.  Certifique-se de ter o **Node.js** instalado na máquina.
2.  Dê dois cliques no arquivo **`iniciar.bat`** (ou execute `node server.js` no terminal).
3.  Abra seu navegador e acesse:
    👉 **[http://localhost:3000](http://localhost:3000)**
4.  Dê permissão de acesso à câmera, aponte para uma placa ou envie uma imagem clicando no botão **FOTO**.
