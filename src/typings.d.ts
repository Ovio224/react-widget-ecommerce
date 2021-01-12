interface IConfig {
    attributes: [string]
    cable_configuration: [string]
    image: string
    placeholder?: string
    placeholder_text?: string
    cart_button?: string
    select_attribute?: () => void
    color?: string
}

