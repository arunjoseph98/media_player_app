import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveVideoAPI - post methord ,add component
export const saveVideoAPI = async (videoDetails) =>{
    return await commonAPI('POST',`${SERVERURL}/uploadVideos`,videoDetails)
}

// getAllVideoAPI - get methord , called view component , when component displayes in browser inside its useEfect hook
export const getAllVideoAPI = async () =>{
    return await commonAPI('GET',`${SERVERURL}/uploadVideos`,'')
}

// saveHistoryAPI - POST method , called videoCard 
export const saveHistoryAPI = async (historyDetails) =>{
    return await commonAPI('POST',`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI - get methord , called history component , when component displayes in browser inside its useEfect hook
export const getAllHistoryAPI = async () =>{
    return await commonAPI('GET',`${SERVERURL}/history`,'')
}

// deleteHistoryAPI - Delete method , called history component, when clicked on delete button
export const deleteHistoryAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI - Delete method , called videocard component, when clicked on delete button
export const removeVideoAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoriesAPI - POST method , called categories 
//categoriesDetails={categoriesName,allvideos}
export const saveCategoriesAPI = async (categoriesDetails) =>{
    return await commonAPI('POST',`${SERVERURL}/categories`,categoriesDetails)
}


// getAllCategoryAPI - get methord , called Category component , when component displayes in browser inside its useEfect hook
export const getAllCategoryAPI = async () =>{
    return await commonAPI('GET',`${SERVERURL}/categories`,'')
}

// deleteCategoryAPI - Delete method , called Category component, when clicked on delete button
export const deleteCategoryAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/categories/${id}`,{})
}

// updateCategoryAPI - put method , called Category component, when video droped over category
export const updateCategoryAPI= async (categoryDetails) =>{
    return await commonAPI('PUT',`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}