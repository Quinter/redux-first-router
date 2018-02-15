import createTest from '../../__helpers__/createTest'

createTest('pathless route thunk called', {
  PATHLESS: {
    thunk: ({ dispatch }) => {
      dispatch({ type: 'REDIRECTED' })
    },
    onComplete: function() {}
  }
})

createTest('pathless route thunk errors trigger onError', {
  PATHLESS: {
    thunk: ({ dispatch }) => {
      throw new Error('fail')
    },
    onError: function() {},
    onComplete: function() { }
  }
})