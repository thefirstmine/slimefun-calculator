const materials = {
  "RAI": {
    title: "Reinforced Alloy Ingot Calculator",
    thumbnail: "https://media.discordapp.net/attachments/856788504297078814/856788520130707456/latest.png",
    items: [
      { name: "Iron Dust", value: 4 },
      { name: "Iron Ingot", value: 4 },
      { name: "Coal", value: 64 },
      { name: "Aluminum Dust", value: 2 },
      { name: "Aluminum Ingot", value: 2 },
      { name: "Copper Dust", value: 5 },
      { name: "Copper Ingot", value: 2 },
      { name: "Tin Dust", value: 3 },
      { name: "Silver Dust", value: 2 },
      { name: "Gold Dust", value: 12 },
      { name: "Lead Dust", value: 1 },
      { name: "Lead Ingot", value: 1 },
    ]
  }
}

const displayItem = (itemName, amount, embed, channel) => {
  info = materials[itemName]
  embed
  .setTitle(info.title)
  .setThumbnail(info.thumbnail)
  .setColor("BLUE")
  .addFields(...info.items)

  channel.send(embed)
}

export default displayItem
