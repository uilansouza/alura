
class Perfil():

    def __init__(self, nome, telefone, empresa):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
        self.__curtidas = 0

    def imprimir(self):
        print('nome: %s, Telefone %s, Empresa %s' %(self.nome, self.telefone, self.empresa))

    def curtir(self):
        self.__curtidas +=1

    def obter_curtidas(self):
        return self.__curtidas
    @classmethod
    def gerar_perfis(classe, nome_arquivo):
        arquivo = open(nome_arquivo, 'r')
        perfis = []
        for linha in arquivo:
            valores = linha.split(',')
            perfis.append(classe(*valores))
        arquivo.close()
        return perfis



class Perfil_vip(Perfil):
    'classe padrão perfis de usuario'

    def __init__(self, nome, telefone, empresa, apelido=''):
        super(Perfil_vip, self).__init__(nome, telefone, empresa)
        self.apelido = apelido


    def obter_creditos(self):
        return super(Perfil_vip, self).obter_curtidas() * 10.0