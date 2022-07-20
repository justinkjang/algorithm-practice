import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UseRefPlayground = () => {
  const test = useRef([]);
  const abortCtrl = new AbortController();

  const onBtnClick = () => {
    console.log(test.current);
    console.log(abortCtrl.signal);

    test.current.push(abortCtrl);

    console.log(test.current);

    test.current.forEach((x) => x.abort());

    // test.current = test.current.filter((x) => x !== abortCtrl);

    console.log(test.current);
  };
  return (
    <React.Fragment>
      <button className='center' onClick={onBtnClick}>
        Button
      </button>

      <div>
        <Link to={'/'}>to Home</Link>
      </div>
    </React.Fragment>
  );
};

export default UseRefPlayground;

// const UseRefPlayground = () => {
//   const users = [
//     {
//       id: 1,
//       name: 'Abby',
//     },
//     {
//       id: 2,
//       name: 'Bob',
//     },
//     {
//       id: 3,
//       name: 'Carl',
//     },
//   ];

//   const nextId = useRef(4);

//   // useRef will hold on to its value even when rerender
//   // using a useRef won't rerender on change.
//   const onCreate = () => {
//     users.push({ id: nextId.current });
//     console.log(users);
//     console.log(nextId);

//     nextId.current += 1;
//   };

//   return (
//     <React.Fragment>
//       <div>
//         {users.map((x) => (
//           <div>
//             <h4>
//               {x.id} {x.name}
//             </h4>
//           </div>
//         ))}
//       </div>
//       <button onClick={onCreate}>Add person</button>

//       <div>
//         <Link to={'/'}>to Home</Link>
//       </div>
//     </React.Fragment>
//   );
// };

// export default UseRefPlayground;

// const UseRefPlayground = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   // Create ref variable
//   const ref = useRef();

//   const onClickReset = () => {
//     setName('');
//     setNickname('');
//     // on click, focus goes to ref pointer
//     ref.current.focus();
//   };

//   return (
//     <React.Fragment>
//       {/* set ref pointer to desired DOM element */}
//       <input value={name} onChange={onChangeName} ref={ref} />
//       <input value={nickname} onChange={onChangeNickname} />
//       <button onClick={onClickReset}>RESET</button>

//       <div>
//         <h3>Result</h3>
//         <h4>
//           {name}'s nickname will be {nickname}!
//         </h4>
//       </div>
//     </React.Fragment>
//   );
// };

// export default UseRefPlayground;
