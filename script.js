$.getJSON(
	"https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1", 
	function(data) {
		console.log(data);

			var image = "http://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178";
			var name = data.products[0].name;
			var description = data.products[0].description;
			var oldPrice = data.products[0].oldPrice;
			var price = data.products[0].price;

			$(".image").attr("src", image);
			$(".name").append(name);
			$(".description").append(description);
			$(".oldPrice").append(oldPrice);
			$(".price").append(price);
		}
);