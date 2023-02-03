

import base from "./base"
import dev from "./dev"
import pro from "./pro"

const export_config = Object.assign({}, base, process.env.NODE_ENV === "production" ? pro : dev)

export default export_config
