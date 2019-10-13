from unittest import TestCase

from src.leilao.dominio import Leilao, Lance, Usuario


class TestAvaliador(TestCase):

    def setUp(self):
#Primeirometodo a ser executado
        self.gui = Usuario('Gui')
        self.lance_do_gui = Lance(self.gui, 150.0)
        self.leilao = Leilao('Celular')


    def test_deve_retornar_o_maior_e_o_menor_valor_de_um_lance_quando_adicionads_em_ordem_crescente(self):
        yuri = Usuario('Yuri')
        lance_do_yuri = Lance(yuri, 100.0)
        self.leilao.propoe(lance_do_yuri)
        self.leilao.propoe(self.lance_do_gui)



        menor_valor_esperado = 100.0
        maior_valor_esperado = 150.0

        self.assert_(menor_valor_esperado, self.leilao.menor_lance)
        self.assert_(maior_valor_esperado, self.leilao.maior_lance)

    def test_deve_retornar_o_maior_e_o_menor_valor_de_um_lance_quando_adicionads_em_ordem_decrescente(self):
        yuri = Usuario('Yuri')
        lance_do_yuri = Lance(yuri, 100.0)

        self.leilao.propoe(lance_do_yuri)
        self.leilao.propoe(self.lance_do_gui)


        maior_valor_esperado = 150.0
        menor_valor_esperado = 100.0

        self.assert_(menor_valor_esperado, self.leilao.menor_lance)
        self.assert_(maior_valor_esperado, self.leilao.maior_lance)

    def test_deve_retornar_O_mesmo_valor_para_o_maior_e_menor_lance_quando_leilao_tiver_um_lance(self):
        gui = Usuario('Gui')
        lance = Lance(gui, 150)


        self.leilao.propoe(lance)



        self.assertEqual(150.0, self.leilao.menor_lance)
        self.assertEqual(150.0, self.leilao.maior_lance)

    def test_deve_retornar_O_mesmo_valor_para_o_maior_e_menor_lance_quando_leilao_tiver_tres_lances(self):

        vini = Usuario('Vini')

        lance_do_vini = Lance(vini, 200.0)

        yuri = Usuario('Yuri')
        lance_do_yuri = Lance(yuri, 100.0)

        self.leilao.propoe(lance_do_yuri)
        self.leilao.propoe(self.lance_do_gui)
        self.leilao.propoe(lance_do_vini)


        maior_valor_esperado = 150.0
        menor_valor_esperado = 200.0

        self.assert_(menor_valor_esperado, self.leilao.menor_lance)
        self.assert_(maior_valor_esperado, self.leilao.maior_lance)





















