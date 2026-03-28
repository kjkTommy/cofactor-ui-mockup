import {CircularOrbit} from "@/components/circular-orbit";

const archiveItems = [
    {value: "06", label: "С чего все началось: история издателя"},
    {value: "10", label: "Рубрика «Здоровые новости»"},
    {value: "12", label: "Тема номера: «Просыпайтесь! Весна!»"},
    {value: "18", label: "Елена Зимасова про «Возраст счастья»"},
    {value: "38", label: "Весенние дикоросы на страже здоровья"},
    {
        value: "46",
        label: "Как правильно выбрать магний с провизором Анной Беляевой",
    },
    {value: "51", label: "Банные примудрости для мягкой интоксикации"},
    {
        value: "48",
        label:
            "Секреты долголетия: диалог с ученым. 88 лет Алексею Алексеевичу Плешакову",
    },
    {
        value: "60",
        label: "Елена Сведзинская. Осанка - ключ к долголетию и красоте",
    },
    {
        value: "66",
        label:
            "«Страницы, которые меняют». Подборка книг о планировании и перестройке жизни от Анастасии Поляниной",
    },
    {value: "68", label: "Новый проект «Слушатель» от издателя"},
    {
        value: "78",
        label:
            "Восток для сильных. История одного путешествия на Курильские острова",
    },
    {value: "86", label: "Рубрика «Мой зумер»"},
    {value: "90", label: "Чекап организма"},
];

export default function ArchivePage() {
    return (
        <main className="shell section-gap page-stack">
            <p className="eyebrow">Содержание номера</p>

            <CircularOrbit items={archiveItems} className="archive-layout"/>
        </main>
    );
}
