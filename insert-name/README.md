
insert-name
=======================

state와 props
------------------------

<p>
  부모 컴포넌트에서 자식 컴포넌트에게 prop로 함수와 state를 넘겨주면
  자식 컴포넌트에서도 부모 컴포넌트의 state를 바꿀 수 있다.
</p>

<p>
  라우터 태그 안에서 컴포넌트에 props 전달하기
</p>


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<Route path="/result" render={
  (props) => <Result {...props} value={this.state.name} />
} />

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~