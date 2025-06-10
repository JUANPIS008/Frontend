import sqlite3
def conectar():
    conn = sqlite3.connect("/sql/base.db")
    return conn