# Documento de Requisitos

## Requisitos funcionais

- Cadastro de usuários
  - Permitir que os clientes se cadastrem na aplicação com nome, data de nascimento, gênero, telefone, e-mail e CPF. 
  - Login e autenticação via e-mail e redes sociais.
  - Recuperação de senha via e-mail.
  - Papel de administrador e cliente.

- Gerenciamento de produtos
  - Cadastro, edição e remoção de produtos.
  - Controle de estoque com alerta ao atingir quantidade especificada.

- Suporte ao Cliente

## Requisitos não funcionais

- Segurança
  - Criptografia da senha no padrão AES-256 .
  - Código de acesso via e-mail para novos acessos.
  - Autenticação em dois fatores no login.

- Desempenho
   - Disponibilidade: tempo médio de recuperação
   -    
- Escalabilidade   
  - Arquitetura de um software escalável com auxílio de microserviços.
  - BC escalável  (NoSQL).
  - Escalabilidade da rede de um sistema entre o relacionamento dos clientes e funcionários.
  - Análise de Dados
  - Monitoramento na garantia de que o sistema suporte novas demandas das lojas. (Datadog, Grafana e Prometheus)
  
