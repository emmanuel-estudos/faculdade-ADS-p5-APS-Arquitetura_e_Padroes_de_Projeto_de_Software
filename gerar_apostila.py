import sys
import os
import subprocess

# Informações Específicas para a criação do Arquivo
nome_arquivo = "Apostila-APS.md"
titulo_arquivo = "Arquitetura e Padrões de Projetos de Software"

# Pega o caminho absoluto da pasta onde ESTE arquivo está (Pasta do Curso)
diretorio_do_curso = os.path.dirname(os.path.abspath(__file__))

# Configura o caminho para a Wiki
caminho_wiki = os.path.abspath(os.path.join(diretorio_do_curso, '..', 'Wiki'))

if caminho_wiki not in sys.path:
    sys.path.append(caminho_wiki)

try:
    from gerador import executar

    executar(
        caminho_pasta=diretorio_do_curso, 
        nome_arquivo_personalizado=nome_arquivo,
        titulo_customizado=titulo_arquivo
    )

    # reabrindo o arquivo markdown gerado
    caminho_final = os.path.join(diretorio_do_curso, nome_arquivo)
    
    if os.path.exists(caminho_final):
        # Chama o executável 'code' do seu sistema
        subprocess.run(["code", "-r", caminho_final], shell=True)

except ImportError as e:
    print(f"❌ Erro ao importar a Wiki: {e}")
except Exception as e:
    print(f"⚠️ Erro ao tentar abrir no VS Code: {e}")