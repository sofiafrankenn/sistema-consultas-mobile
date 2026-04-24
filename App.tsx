/*
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


type StatusConsulta = "agendada" | "confirmada" | "cancelada" | "realizada";

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: StatusConsulta;
};


function formatarStatus(status: StatusConsulta): string {
  const labels: Record<StatusConsulta, string> = {
    agendada: "📅 Agendada",
    confirmada: "✅ Confirmada",
    cancelada: "❌ Cancelada",
    realizada: "🏥 Realizada",
  };
  return labels[status];
}

function formatarData(data: string): string {
  return `Data: ${data}`;
}


export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });


  function confirmarConsulta() {
    setConsulta({ ...consulta, status: "confirmada" });
  }

  function cancelarConsulta() {
    setConsulta({ ...consulta, status: "cancelada" });
  }

  function marcarRealizada() {
    setConsulta({ ...consulta, status: "realizada" });
  }


  function renderizarAcoes() {
    if (consulta.status === "agendada") {
      return (
        <View style={styles.botoesRow}>
          <TouchableOpacity
            style={[styles.botao, styles.botaoConfirmar]}
            onPress={confirmarConsulta}
          >
            <Text style={styles.botaoTexto}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, styles.botaoCancelar]}
            onPress={cancelarConsulta}
          >
            <Text style={styles.botaoTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (consulta.status === "confirmada") {
      return (
        <TouchableOpacity
          style={[styles.botao, styles.botaoRealizada]}
          onPress={marcarRealizada}
        >
          <Text style={styles.botaoTexto}>Marcar como Realizada</Text>
        </TouchableOpacity>
      );
    }

    if (consulta.status === "cancelada") {
      return (
        <Text style={styles.mensagemCancelada}>
          Esta consulta foi cancelada.
        </Text>
      );
    }

    if (consulta.status === "realizada") {
      return (
        <Text style={styles.mensagemRealizada}>
          Consulta realizada com sucesso!
        </Text>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      <View style={styles.card}>
        <Text style={styles.campo}>
          👤 Paciente: {consulta.paciente}
        </Text>
        <Text style={styles.campo}>
          🩺 Médico: {consulta.medico}
        </Text>
        <Text style={styles.campo}>
          {formatarData(consulta.data)}
        </Text>
        <Text style={[styles.campo, styles.status]}>
          {formatarStatus(consulta.status)}
        </Text>

        <View style={styles.divisor} />

        {renderizarAcoes()}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1a202c",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  campo: {
    fontSize: 16,
    marginBottom: 8,
    color: "#2d3748",
  },
  status: {
    fontWeight: "bold",
    fontSize: 17,
  },
  divisor: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 16,
  },
  botoesRow: {
    flexDirection: "row",
    gap: 12,
  },
  botao: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoConfirmar: {
    backgroundColor: "#48bb78",
  },
  botaoCancelar: {
    backgroundColor: "#fc8181",
  },
  botaoRealizada: {
    backgroundColor: "#4299e1",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  mensagemCancelada: {
    color: "#e53e3e",
    fontWeight: "bold",
    textAlign: "center",
  },
  mensagemRealizada: {
    color: "#38a169",
    fontWeight: "bold",
    textAlign: "center",
  },
});
*/

import React from "react";
import { Home } from "./src/screens";

export default function App() {
  return <Home />;
}