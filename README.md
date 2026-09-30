# Karma IA

Abra `index.html` no navegador. Em **Conexões**, escolha o provedor, depois o modelo e por fim cole uma chave nova da sua própria conta. As chaves ficam apenas na sessão do navegador e são apagadas ao fechar a aba.

O projeto inclui:

- Estúdio de chat, código e imagens;
- Gemini, OpenAI, Groq, OpenRouter e endpoint compatível personalizado;
- projetos e biblioteca persistidos somente no seu navegador;
- geração de sprite yin-yang demonstrativo quando o modo imagem é usado sem chave;
- criação real de imagens via modelos Gemini compatíveis com imagem.

As APIs têm regras, modelos, cotas gratuitas e compatibilidade próprias. Nem todos os modelos de todos os provedores aceitam imagens, e alguns exigem faturamento. Para usar o Gemini gratuitamente, gere uma chave nova e restrita no Google AI Studio; nunca compartilhe a chave no chat.

Para publicar em produção, mova as chamadas da API para um backend. Uma chave em JavaScript do navegador não é segura.
