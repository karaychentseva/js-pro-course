import { films, Film } from "./films";

// 1. Собрать в массив все жанры фильмов (без повторения)
const f1 = (films: Film[]): string[] => {
    const allGenres = films
        .map(film => film.genre)
        .reduce((a, b) => a.concat(b));
    return [... new Set(allGenres)];
};

console.log(f1(films));

// 2. Собрать в массив всех актеров всех фильмов (без повторения)
const f2 = (films: Film[]): string[] => {
    const allActors = films
        .map(film => film.actors)
        .reduce((a, b) => a.concat(b));
    return [... new Set(allActors)];
};

console.log(f2(films));

// 3. Отсортировать фильмы по рейтингу по убыванию
const f3 = (films: Film[]): Film[] => {
    return films.sort((a, b) => b.imdbRating - a.imdbRating);
};

console.log(f3(films));

// 4. Создать новый массив, где объекты фильмов будут состоять из следующих полей:
// id, title, released, plot
type ShortFilmInfo = {
    id: number,
    title: string,
    released: string,
    plot?: string
}
const f4 = (films: Film[]): ShortFilmInfo[] => {
    return films.map(f => { return { id: f.id, title: f.title, released: f.released, plot: f.plot } });
};

console.log(f4(films));

// 5. Создать функцию, которая бы принимала массив фильмов и
// число. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где число равно году
// выхода фильма.
const f5 = (films: Film[], year: number): Film[] => {
    return films.filter(f => f.year === year);
};

console.log(f5(films, 2001));

/*
    6. Создать функцию, которая бы принимала массив фильмов и
    строку. А результатом этой функции должен быть новый
    отфильтрованный массив, с фильмами, где строка входит в
    название фильма.
*/
const f6 = (films: Film[], search: string): Film[] => {
    return films.filter(f => f.title.includes(search));
};

console.log(f6(films, 'Harry').map(f => f.title));

/*
    7. Создать функцию, которая бы принимала массив фильмов и
    строку. А результатом этой функции должен быть
    отфильтрованный массив, с фильмами где строка входит в
    название фильма или в его сюжет.
*/
const f7 = (films: Film[], search: string): Film[] => {
    return films.filter(f => f.title.includes(search) || f.plot.includes(search));
};

console.log(f7(films, 'and').map(f => f.title));

/*
    8. Создать функцию, которая бы принимала 3 параметра:
    1)массив фильмов , 2) строка(название поля, например 'title') и
    строку/число(значение поля "Black Widow"). А результатом
    этой функции должен быть отфильтрованный массив, где
    параметры 2 и 3 равны в объекте фильма. Например:
    передаем (films, 'title', 'Black Widow') и на выходе получаем
    фильм с id=1 если передаем (films, 'year', 2011) , то получаем
    фильм с id=2 
*/
const f8 = (films: Film[], fieldName: keyof Film, fieldValue: string | number): Film[] => {
    return films.filter(f => f[fieldName] == fieldValue);
};

console.log(f8(films, 'title', 'Black Widow').map(f => f.id));
console.log(f8(films, 'year', 2011).map(f => f.id));
