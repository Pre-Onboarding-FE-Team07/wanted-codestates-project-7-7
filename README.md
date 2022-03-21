# 데이터블 과제1 - 폼 서비스

사용자가 원하는 형식으로 폼을 생성하고 데이터를 입력받을 수 있는 폼 서비스입니다.

[데이터블 과제2 프로젝트 바로가기](https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-7-2)

## 사용한 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/>  <img src="https://img.shields.io/badge/Typescript-2D79C7.svg?&style=for-the-badge&logo=Typescript&logoColor=fff"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=Emotion&logoColor=000"/>

## 프로젝트 실행 방법

- 배포 사이트 : https://datable-formservice.surge.sh/

- 로컬 
1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-7-1.git`
2. `npm install`
3. `npm run start`

   
## 프로젝트 구조

```
--📁 src
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  ---📁 context ➡ context API를 담은 폴더
  ---📁 interfaces ➡ typescript interfaces 폴더
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
```

## 팀 멤버

| 이름                                       | 직책 | 역할                                       |
| ------------------------------------------ | ---- | ----------------------------------- |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 폼 목록 페이지 구현|
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 개발환경 구축 및 폼 생성 페이지 구현           |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 폼 입력 페이지 구현 |


---

## 구현한 기능 목록

1. 생성된 폼 목록 확인
2. 폼 생성화면
  - 필드 추가/삭제
  - 필드 순서 이동 (드래그)
  - 타입 선택 및 Option 추가/삭제
  - 텍스트 에디터
3. 생성된 폼 확인(설문지 입력)
  - 설문지 타입별 폼 구현
  - 주소 입력(카카오 API 사용 & 반응형)
  - 파일첨부 및 프로그레스바
4. 설문지 별 사용자 데이터 목록(설문지 결과)
5. 토스트 UI
---

## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 예효은

개발환경 구축 및 폼 생성 페이지 구현
### 구현한 방법
#### 1. 개발환경 구축
CRA로 React 개발 환경을 구축 후 협업을 위한 eslint, prettier, husky, git 관련한 template 등을 설정해주었습니다.
완전한 개발 환경 구축은 처음으로 도전하게 되었지만 기존 프로젝트에서 설정했던 부분들을 참고하여 수월하게 진행할 수 있었습니다.
다만 환경 구축 이후 TypeScript도 사용하는 것으로 결정되어 관련하여 추가적인 설정이 필요했습니다.
자료들을 찾아보면서 필요한 라이브러리 설치 및 typescript 설정 파일 생성, eslint 설정 파일 수정 등의 작업을 진행하였습니다.

#### 2. 폼 생성 페이지 구현

**1) 컴포넌트 구조**

폼 생성 페이지의 필드 영역은 다양한 input 요소들로 구성되어있고, 폼 type 선택에 따라 동적으로 변화해야 하기 때문에 최대한 컴포넌트를 분리하여 구현하려고 했습니다. 필드 영역인 `<Field/>` 컴포넌트를 만들고 내부에 `<TextEditor>,<FieldTools>` 컴포넌트를 넣어주었으며 `<FieldTools>`컴포넌트 내부에는 `<ChedkBox/>,<SelectType/>,<OptionList/>` 컴포넌트들을 넣어주었습니다. 이 구조는 추후에 Context API 적용 및 드래그 기능을 구현하면서 `<Field/>` 컴포넌트 내부에 필드 데이터와 관련된 컴포넌트들을 감싸는`<FieldDatas/>` 컴포넌트를 두어 이 내부에 기존 `<TextEditor>,<FieldTools>` 를 넣어주는 구조로 변경되었습니다.

**2) ContextAPI 적용**

폼 생성 페이지 내부에서 공유할 Context를 생성해 주었습니다. Context는 필드 하나를 관리하는 `FieldContext`와 필드 목록 및 제목, 폼 id를 관리하는 `FormDataContext`를 만들었으며 이전 프로젝트에서 redux 사용시 `action, reducer, type` 등을 나누어서 관리했던 것이 편리했던 기억이 있어 이와 비슷한 구조로 Context를 구성하였습니다. 이렇게 생성한 Context 들은 Field내의 항목들의 값이 변경되었을 때 `FieldContext`의 state를 수정하고 FieldContext가 수정된 것을 감지하여 `FormDataContext`의 state를 수정하도록 만들었습니다.

**3) 세부 기능**

필드 항목에는 다양한 기능들이 있지만 그 중에서 처음 도전해보았던 텍스트 에디터와 드래그를 통한 순서이동에 대해 구현 방법을 정리하였습니다.

**텍스트 에디터**

텍스트 에디터는 위지윅 에디터를 사용하여 구현하라는 안내가 있어 관련해서 검색을 해보았고 `Quill`이라는 에디터를 사용하였습니다. 우선 지원하는 기능들이나 UI가 기업의 참고 이미지의 에디터와 유사하여 좋았고, 사용해본 유저들이 많아 선택하게 되었습니다. 사용 시에는 필요한 기능들을 배열로 나열하여 전달해주기만 하면 되어서 사용이 간편했습니다. 

**드래그를 통한 순서 이동**

javascript 개발 시에 draggable 라이브러리를 사용해 본 경험이 있으나 직접 드래그 이벤트를 구현해본 것은 처음이었습니다. 요구사항이 복잡하지 않았고, 라이브러리를 사용함으로써 기존 구현해놓은 컴포넌트들의 구조가 변경될 가능성이 있어 직접 구현하게 되었으며 `drag`를 시작한 element와 `dragOver`이벤트가 발생된 element의 `index`를 저장하여 `dragEnd`이벤트가 발생되었을 때 해당 index들을 통해 drag한 element를 over된 element의 index로 변경하여 배열을 업데이트 해주었습니다.

### 어려웠던 점 (에러 핸들링)
#### 1. TypeScript 오류
**Typescript**를 이번에 처음 사용해보았는데, 오류 내용과 해결방법에 대해 정리한 내용이 notion 페이지에 가득 차지할 정도로 수많은 오류들을 맞닥뜨리면서 **별다른 생각없이 사용해오던 변수, 파라미터들의 type을 알게되었고 얼마나 type에 대한 개념이 부족했는지 느끼게 되었습니다.** 하지만 다양한 오류를 만날 때마다 검색을 거듭했고, 오류들을 하나씩 해결해나가면서 type에 대한 이해도 향상되었습니다. 마침내 개발 중반 이후 부터는 오류가 나더라도 Type을 바로바로 수정할 수 있게 되었고, 다른 팀원분들에게도 오류의 원인과 해결방법에 대해 설명할 수 있게 되었습니다. 처음에는 Typescript를 사용한 것을 후회하기도 했지만 사용해보니 **Code에 대한 이해도도 올라가고 잘못된 값에 대한 방지가 바로 바로 가능한 것이 장점으로 느껴졌습니다.** 특히 Context를 생성하면서 TypeScript 오류를 많이 보았었는데 해결 과정을 통해서 Context를 생성하기 위해서 어떤 타입의 값들이 필요한지, 전달해주어야 하는지 알게되었으며 TypeScript를 사용하지 않았더라면 이해하지 못했을 부분이기 떄문에 이 점에서 많은 도움이 되었으며 개인 프로젝트를 진행하더라도 꼭 다시 사용하겠다고 다짐했습니다.

#### 2. Rerendering 최적화
컴포넌트가 리렌더링 되면서 하위 컴포넌트들이 불필요하게 리렌더링 되는 부분을 최적화하였습니다. 이전에 저였다면 어디서 리렌더링이 불필요하게 발생하는지도 파악하지 못했을 것이며 어떤 방식으로 처리해야하는지 검색이 필요했을텐데 이번에는 "이 부분에서 불필요하게 리렌더링이 일어날 것 같은데?" 라고 생각되는 부분에 log를 남겨 확인해보면 실제로 불필요한 리렌더링이 발생하고 있는 것을 확인할 수 있었고, 이를 해결하기 위해 `useCallback, useMemo, memo` 등을 다양하게 사용하면서 리렌더링을 최적화하였습니다.


## 이예지
생성된 폼 확인(설문지 입력) 및 설문지 별 사용자 데이터 목록(설문지 결과)

### 구현한 방법

인원이 적기에 해당 폼을 구현할 수 있을까라는 걱정과 함께 화면 디자인의 통일성을 위해서 [Ant Design 라이브러리](https://ant.design/)를 사용해보면 어떨까요?라는 제안을 했었습니다. 팀원분들이 적극적으로 의견을 수용해주셨고, 그 결과 antD라이브러리를 통해 해당 페이지를 완성할 수 있었습니다. 웬만하면 해당 라이브러리를 이용하여 기능을 구현하려고 하였지만, 예상치 못했던 라이브러리 오류로 인해 더 힘들었고, 해당 라이브러리를 분석하는데 오히려 시간을 더 투자했었던 기억이 있습니다. 우선 TypeScript를 통해 해당 만들어진 라이브러리가 어떤 타입으로 이뤄져있는지 처음에는 알 수가 없어서 당황을 많이 했었습니다. 하지만 타고타고 들어가서 해당 라이브러리의 타입을 알 수 있었고, 그 타입들로 이루어진 파일을 보니깐 TypeScript에 대해서 좀 더 알 수 있었습니다. 이제 제가 맡은 기능에 대해 설명을 드리겠습니다. 생성된 폼을 확인하여 설문지를 입력하기 위해서는 팀원분이 만들어놓은 Context API의 `FormListContext`를 이용하여 해당 폼 결과를 알 수 있어야 했었습니다. 그렇기에 param id와 FormListContext에 id와 일치하는 결과를 찾아서 해당 값의 최적화를 위해 useMemo에 담아서 활용하였습니다.
```jsx
 const { id } = useParams();
  const matchData = useMemo(
    () => formListState.formList.filter((item) => item.id === id)[0].fieldList,
    [formListState.formList, id]
  );
```
또한 해당하는 폼에 맞게 설문지 입력을 할 수 있는 폼을 생성해야하므로, `switch-case`를 이용하여 해당 type에 맞게 화면을 출력할 수 있도록 하였습니다.
```jsx
const componentType = (item: FieldType) => {
    switch (item.type) {
      case 'text':
        return <Name item={item} />;
      case 'phone':
        return <Phone item={item} />;
      case 'address':
        return <PostCode setAddress={setAddress || tempAction} item={item} />;
      case 'select':
        return <SelectBox item={item} />;
      case 'file':
        return <File setUrl={setUrl || tempAction} item={item} />;
      case 'agreement':
        return <Agreement item={item} />;
      default:
        return null;
    }
  };
```

### 어려웠던 점 (에러 핸들링)

**1) 타입스크립트를 이용한 context API**
어떤 타입을 넣어주어야하는지 굉장히 고민이 많았습니다. 
특히 아래의 코드와 같이 코드를 짤 때 `() => {}` 함수를 통해 해당 state를 변경해주는 작업을 많이 했던 때라 어떤 타입을 두어야 맞는 타입인지 정말 고민을 많이 하며 찾았었습니다.
```jsx
export const AddressContext = createContext({
  jusoData: {},
  setJusoData: () => {},
});
```
하지만 [해당 블로그](https://velog.io/@velopert/typescript-context-api)에서 상태 context와 디스패치 전용 context를 만든다면 낭비 렌더링을 방지할 수 있다고 했기에 바로 적용을 하였고, 더 좋은 결과를 얻을 수 있었습니다.
![](https://images.velog.io/images/ye-ji/post/4f6db1fc-2432-4288-b3a0-4623e9654f72/image.png)

**2) 상태(state) 끌어올리기**

antD을 이용하면, onFinish()함수를 이용하여 사용자가 입력한 데이터를 받아올 수 있습니다. 하지만 주소를 입력받는 폼은 onChange 이벤트가 변경되지 않았기에 AntD자체에서 해당 값이 undefined로 계속되었습니다. 이 문제를 해결하기 위해 자식 컴포넌트에서 부모 컴포넌트로 어떻게 하면 해당 값을 가져올 수 있을까에 대한 고민과 방법을 찾기위해 많은 노력을 하였습니다. 첫번째로는 context API를 Object형식으로 만들어서 각 필드마다 해당 된 데이터를 넣어보자라는 생각으로 코드를 작성하였습니다. 하지만 해당 값을 넣어도 바로 즉각적으로 부모에서 바뀌는 것을 확인할 수 없었고, state값이 변경되면 컴포넌트가 다시 리렌더링 된다라는 생각과 함께 props로 setState를 넘겨주면 해당 이벤트가 실행되겠다라는 생각으로 state의 변경된 값을 확인할 수 있었습니다.

**3) 데이터 형태 만들기**
어떠한 데이터 형태로 만들어야 해당 데이터를 잘 뽑을 수 있을까에 대한 고민이 많았습니다. 첫번째로는 그냥 Array로 만들어서 설문지 결과를 출력할 수 있도록 로직을 작성하자하였지만 만들고 나니 설문지 입력할 수 있는 폼이 많이 생성되면 해당 폼에 따른 사용자 데이터를 어떻게 보지?라는 의문과 함께 데이터 형태를 아래와 같이 수정하여 결과를 잘 출력할 수 있었습니다. 이러한 문제를 겪으면서 어떠한 기능을 만들 때 좀 더 설계를 확실히 하여 반복되는 일은 줄여야겠다는 생각을 가지게 되었습니다.
```jsx
export type userListType = {
  id: userId;
  userList: userType[];
};
```