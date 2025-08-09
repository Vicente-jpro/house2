#!/bin/bash

# Nome do script: start_services.sh
# Uso: ./start_services.sh

echo "🚀 Iniciando Mailcatcher..."

# Inicia Mailcatcher em background e redireciona a saída
nohup mailcatcher --http-ip=0.0.0.0 > log/mailcatcher.log 2>&1 &

# Espera um pouco para garantir que o mailcatcher suba
sleep 2
echo "✅ Mailcatcher iniciado em http://localhost:1080"

echo "📦 Iniciando worker Resque..."

# Inicia o worker Resque
nohup QUEUE=* bundle exec rake resque:work > log/resque_worker.log 2>&1 &

echo "✅ Worker Resque rodando em background."

echo "🎉 Todos os serviços foram iniciados!"
