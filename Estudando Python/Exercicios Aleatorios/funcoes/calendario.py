from datetime import datetime 

class Calendario:
    def __init__(self):
        self.__date = datetime.now()
        self.dias_da_semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
        self.meses_do_ano = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    def obter_data_atual(self) -> str:
        dia_str = self.dias_da_semana[self.__date.weekday()]
        mes_str = self.meses_do_ano[self.__date.month - 1]
        return f'{dia_str}, {self.__date.day} de {mes_str} de {self.__date.year}'

if __name__ == "__main__":
    calendario = Calendario()
    print(calendario.obter_data_atual())
