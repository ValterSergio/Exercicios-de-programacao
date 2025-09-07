class Veiculo:
    def __init__(self, cor, placa, numero_rodas):
        self.cor = cor
        self.placa = placa
        self.numero_rodas = numero_rodas

    def ligar_motor(self):
        print(f"{self.__class__.__name__} com o motor ligado")

    def desligar_motor(self):
        print(f"{self.__class__.__name__} com o motor desligado")


    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"


class Motocicleta(Veiculo):
    pass


class Carro(Veiculo):
    pass


class Caminhao(Veiculo):
    def __init__(self, cor, placa, numero_rodas, carregado):
        super().__init__(cor, placa, numero_rodas)
        self.carregado = carregado

    def esta_carregado(self):
        print(f"{'Sim' if self.carregado else 'Não'} estou carregado")

if __name__ == "__main__":
    moto = Motocicleta("preta", "abc-1234", 2)
    carro = Carro("branco", "xde-0098", 4)
    caminhao = Caminhao("roxo", "gfd-8712", 8, True)

    moto.ligar_motor()
    carro.ligar_motor()
    caminhao.ligar_motor()
    print()
    print(moto)
    print(carro)
    print(caminhao)
    print()
    moto.desligar_motor()
    carro.desligar_motor()
    caminhao.desligar_motor()
    print()
    caminhao.esta_carregado()
    print()

    del carro
    del moto
    del caminhao
