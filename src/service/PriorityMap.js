const priorityMap = {
    "TL": {
        title: "Urgent and Important",
        colour: "#ffadad",
        titleColour: "#F46363",
        priorityCode: "TL",
    },
    "TR": {
        title: "Urgent and Not Important",
        colour:  "#b5f0a8",
        titleColour: "#5cd442",
        priorityCode: "TR",
    },
    "BL": {
        title:"Not Urgent and Important",
        colour: "#A4E4F1",
        titleColour: "#48cae4",
        priorityCode: "BL",
    },
    "BR": {
        title: "Not Urgent and Not Important",
        colour: "#e5e5e5",
        titleColour: "#b7b7b7",
        priorityCode: "BR",
    }
}

module.exports = priorityMap;