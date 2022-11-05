import axios from 'axios'

async function RenderImage(imageId, path) {

    const response = await axios.get('https://storage.indiclaw.com/'+path+'/'+imageId+'/', {
                params: {
                    id:imageId,
                }
            })

    return response.data.url;
}

export default RenderImage;