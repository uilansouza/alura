try:
        open('nao_existe.txt','r')
        print('O arquivo foi aberto')
        arquivo.close()
except IOError as erro:
        print('Deu IOError %s', erro)