import { useEffect } from "react"

const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9653da13-a311-45e4-9c9f-fdfde5dc49e4'

function Api() {
    const fetchCrypto = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        fetchCrypto()
    }, [])
}