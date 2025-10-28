from datetime import datetime 

class Calendario:
    def __init__(self):
        self.__date = datetime.now()
        self.dia_atual = self.__date.day
        self.mes_atual = self.__date.month
        self.ano_atual = self.__date.year
        self.dias_da_semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
        self.meses_do_ano = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    def obter_data_atual(self) -> str:
        dia_int = self.dia_atual
        dia_str = self.dias_da_semana[self.__date.weekday()]
        mes_int = self.mes_atual
        mes_str = self.meses_do_ano[mes_int - 1]
        return f'{dia_str}, {dia_int} de {mes_str} de {self.ano_atual}'

if __name__ == "__main__":
    calendario = Calendario()
    print(calendario.obter_data_atual())
