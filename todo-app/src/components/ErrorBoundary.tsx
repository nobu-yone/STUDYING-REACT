import { Component, type ReactNode } from "react";

interface Props{
    children: ReactNode
    fallback?: ReactNode
}

interface State{
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
   constructor(props: Props){
      super(props)
      this.state = { hasError: false};
   }

    static getDerivedStateFromError(error: Error): State {
      return { hasError: true, error };
    }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              エラーが発生しました
            </h2>
            <p className="text-gray-600">
              申し訳ありませんが、問題が発生しました。
              ページを更新してください。
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

