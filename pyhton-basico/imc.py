class Pessoa():
	def __init__(self, nome, peso, altura):
		self.nome = nome
		self.peso = peso
		self.altura = altura

	def imprime(self):

		imc = peso / altura**

		print( "O Imc de %s é %s"%(self.nome, imc))