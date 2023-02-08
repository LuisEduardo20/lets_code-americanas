import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <form action=''>
        <section>
          <label htmlFor='name'>Name:</label>

          <input type='text' name='name' id='name' />
        </section>

        <section>
          <label htmlFor='type'>Name:</label>

          <select name='type' id='type'>
            <option value='eletric' selected>
              eletric
            </option>
            <option value='fire'>fire</option>
            <option value='water'>water</option>
            <option value='grass'>grass</option>
          </select>
        </section>

        <section>
          <label htmlFor='sort'>Sort:</label>

          <select name='sort' id='sort'>
            <option value='lowest' selected>
              Lowest Number (First)
            </option>
            <option value='highest'>Highest Number (First)</option>
          </select>
        </section>
      </form>
    </div>
  );
};

export default Header;
