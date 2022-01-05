<h1>📗리액트로 만드는 todoList📗<h1>

<h2>📝구현 기능</h2>
  1. input에 입력한 내용 기존 목록에 추가</br>
  2. 카운트 기능(카운트 숫자가 1이상인 목록들을 상단 NavBar에 활성화 될 수 있도록함(숫자로)</br>
  3. reset 버튼을 누루면 활성화된 목록들 전부 초기화(zero)

<h2>📂App.jsx</h2>
  가장 상단 component로 state상태관리 할 수 있음. </br>
  목록들의 count를 관리할 수 있는 함수를 사용해 줌. 인자로 selectedList를 받아오는데, </br>
  이것은 ListHandler.jsx에서 사용자가 클릭한 목록을 담고 있다. 함수에 받아온 인자로 카운터 추가, 감소, 목록삭제 기능을 각각의 함수에서 구현할 수 있다.
</br>
아래코드는 카운트 추가 함수 이다.</br>
handleAddCount = (selectedList) => {</br>
        const lists = [...this.state.lists];</br>
        const index = lists.indexOf(selectedList);</br>
        lists[index].count++;</br>
        this.setState({ lists: lists });</br>
    };
    </br>
받아온 인자를 indexOf함수에 넣어서 lists에 있는 여러 object들 중에 selectedList와 일치하는 항목을 찾아서 index 변수에 할당해준다. </br>
일치하는 항목의 count를 증가시켜주고 setState 함수를 이용해서 state의 내용을 수정해준다. 
</br>
이때 lists는 기존 state를 그대로 spread 연산자를 이용해서 복사해준 뒤 새롭게 배열을 만들어 줬는데 이건 리액트의 중요한 개념중 하나인 불변성 때문이다. 직접적으로 state를 수정하면 안된다. 리액트가 렌더를 할 때 기존 값과 수정값을 비교해서 변동이 있는 부분만 업데이트 시키는데 직접적으로 수정하면 비교 해야 하는 대상의 레퍼런스가 동일하므로 리액트는 업데이트 할 필요가 없다고 판단해서 render 함수를 호출해 주지 않는다.
</br>
예시를handleAddCount로 들었지만 감소, 삭제도 같은 맥락을 가진다. 삭제기능을 구현할 때는 filter함수를 추가적으로 사용해줘야함! 
</br>
App.jsx에서 선언된 함수와 state는 목록들을 담고있는 컴포넌트에 props 해줘야 한다. 인자를 받아와야하기 때문에!</br>ListHandler.jsx에state, </br>handleAddCount, handleMinusCount,</br>handleDeleteCount 를 넘겨준다.

<h2>📂ListHandler.jsx</h2>
ListHandle 컴포넌트는 이 자체로 특별한 역할을 하진 않고 지나가는 통로처럼 사용한다. </br>class내에 함수를 각각 만들어서 그 함수안에 props로 받아온 함수인자 자리안에 한가지 목록만 들어있는 컴포넌트인 List.jsx에서 보내준 값을 인자로 넣어준다. </br>render부분에 props로 받아온 state를 map함수로 돌려서 각각의 obj별로 li항목으로 출력될 수 있게 했다. </br>또한, List.jsx에 props로 함수들과 map함수의 인자를 전달해준다. </br>여기서 유의해야할게 List는 li항목으로 구현했기 때문에 key값을 꼭 넣어줘야한다! </br>최종적으로 props으로 </br>list(map함수인자),  key={list.id} </br>onAddCount={this.handleAddCount} </br>onMinusCount={this.handleMinusCount} </br>onDelete={this.handleDeleteCount} 이와 같은 값을 넘겨준다. 

<h2>📂List.jsx</h2>


