import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Puedes registrar el error o realizar alguna otra acción aquí
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes mostrar un mensaje de error personalizado aquí
      return <h1>Algo salió mal.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;