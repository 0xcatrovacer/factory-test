import { Button, Spinner } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { ThemeContext } from "../lib/themes/mainTheme"

function ThemeButton() {
    const [loading, setLoading] = useState(false)

    const {themeObject} = useContext(ThemeContext)

    return (
        <div>
            <Button
                bg={loading ? themeObject.loading : themeObject.primary}
                color={loading ? themeObject.loadingContent : themeObject.primaryContent}
                _hover={{
                    backgroundColor: !loading && themeObject.hover,
                    color: !loading && themeObject.hoverContent
                }}
                onClick={() => {setLoading(!loading)}}
            >
                {
                    loading ?
                        <Spinner />
                    :
                        <div>Submit</div>
                }
            </Button>
        </div>
    )
}

export default ThemeButton