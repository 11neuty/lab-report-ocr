interface ErrorStateProps {
  message: string
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="preview-error">
      <p className="preview-error__text">{message}</p>
    </div>
  )
}
