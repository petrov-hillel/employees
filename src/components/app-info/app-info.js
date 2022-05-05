import './app-info.css'

export default function AppInfo({increased, employees}) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании APPLE</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}