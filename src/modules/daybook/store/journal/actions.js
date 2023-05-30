import journalApi from "@/api/journalApi"

export const loadEntries = async ( { commit }) => {

    const { data } = await journalApi.get('/entrys.json')
    const entries = []

    for (let id of Object.keys(data)){
        entries.push({id, ...data[id]})
    }

    commit('setEntries', entries)
}

export const updateEntry = async ( { commit }, entry ) => {
    
    const { date, text } = entry
    const dataToSave = { date, text }
       
    const resp = await journalApi.put( `/entrys/${ entry.id }.json`, dataToSave)
    console.log(resp)
    commit('updateEntry', {...entry})

}

export const createEntry = async ({ commit } , entry) => {
    
    const { date, text } = entry
    const dataToSave = { date, text}
    const { data } = await journalApi.post('/entrys.json', dataToSave)

    dataToSave.id = data.name

    commit('addentry', dataToSave)

    return data.name
}


