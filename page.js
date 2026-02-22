export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero секція */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🚗 Автосервіс
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Система для реєстрації автомобілів та створення заявок на обслуговування.
            Користувачі керують своїми авто, а адміністратор обробляє заявки.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            🔧 Розпочати
          </button>
        </div>
      </section>

      {/* Секція можливостей */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ⚙️ Можливості системи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Картка 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚘</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Реєстрація автомобілів
              </h3>
              <p className="text-gray-600">
                Користувач може додавати, редагувати та переглядати власні автомобілі.
              </p>
            </div>

            {/* Картка 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Створення заявок
              </h3>
              <p className="text-gray-600">
                Можливість створювати заявки на ремонт, діагностику, заміну шин та інші послуги.
              </p>
            </div>

            {/* Картка 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Обробка заявок адміністратором
              </h3>
              <p className="text-gray-600">
                Адміністратор переглядає всі заявки, змінює статус (new, in_progress, completed, cancelled)
                та керує користувачами.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Олександр Роман | Курс "Основи обробки та передачі інформації"
          </p>
        </div>
      </footer>

    </div>
  )
}