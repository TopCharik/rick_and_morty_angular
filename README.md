В завданні написано, що список персонажів має бути відсортований за ім'ям. На наданому API такого функціоналу не має. Тому я створив дві версії цього застосунку.
- Цю версію, яка повністю полягається на API. Тобто кожна сторінка завантажується окремим запитом та порядок персонажів лишається незмінним. В ній персонажі відсортовані по id.
- Та версію, де список відсортований за ім'ям. Але для цього доводится ВСІХ персонажів завантажувати при першому запуску сторінки. https://github.com/TopCharik/rick_and_morty_client_pagination

Також в обох версіях фільтрація працює за всьома доступними на API параметрами, наприклад: https://rickapp.serverpagination.andriicharkivskyi.online/characters?page=1&name=rick&gender=female&type=artificial%20intelligence. Тож застосунки дозволяють легко додати всі необхідні фільтри, якщо виникне така необхідність.
