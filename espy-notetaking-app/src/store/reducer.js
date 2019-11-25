const initialState = {
    notes : [
        { title : 'Momento mori',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'blue'
        },
        { title : 'House of Cards',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'green'
        },
        { title : 'Joe Rogan',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'teal'
        },
        
    ],
    currentTitle : '',
    currentContent : '',

    changeTitle : '',
    changeContent : ''

}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TITLE':
            let title = action.value
            return {
                ...state,
                currentTitle : title
            }
        
        case 'CONTENT':
            let content = action.value
            return {
                ...state,
                currentContent : content
            }
        
        case 'SUBMIT':
            
            let newTitle = state.currentTitle
            let newContent = state.currentContent

            if (newTitle.length > 0) {
                return {
                    ...state,
                    notes :  state.notes.concat({title : newTitle, content: newContent, color: 'teal'}),
                    currentTitle : '',
                    currentContent : ''
                }
            }

        case 'CHANGETITLE':
            let editTitle = action.value;
            return {
                ...state,
                changeTitle : editTitle
            }

        case 'CHANGECONTENT':
            let editContent = action.value;
            return {
                ...state,
                changeContent : editContent
                }

        case 'SUBMITCHANGE':
            console.log(state.changeContent);
            console.log(state.changeTitle)
            console.log(action.index)

    }

    

    return state;
}


export default reducer;