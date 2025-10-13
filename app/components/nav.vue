<template>
  <div class="flex flex-col md:flex-row h-screen">
    
<div class="flex flex-col bg-secondary p-4 w-full md:w-[280px] items-center h-screen">
  <h1 class="text-2xl font-inter font-bold tracking-widest bg-clip-text text-transparent animate-gradient">
    TAILWIND
  </h1>
</div>

    <div class="bg-background text-black p-4 flex-1 flex flex-col">

      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">My Catalogs</h2>
        <button class="inline-block bg-tertiary text-white font-bold py-2 px-4 rounded
                        hover:bg-[#FF00FB] hover:scale-105 transition-transform duration-200 ease-in-out">
          Create catalog
        </button>
      </div>

      <div class="border bordercolor"></div>

      
      <div class="flex flex-wrap gap-4 mt-4">

        <div class="bg-white border-[1px] bordercolor p-4 w-full sm:w-[48%] lg:w-[31%] rounded h-[200px]">
          <h1 class="text-[12px] text-black">Create Catalog</h1>
          <p class="text-gray-500 mt-2">Create new catalog to add products and generate content</p>
          <button class="bg-tertiary text-white font-bold py-2 px-4 rounded mt-4 w-full h-[40px] hover:bg-[#FF00FB] transition duration-300">
            Create catalog
          </button>
        </div>

        <div class="bg-white border-[1px] bordercolor p-4 w-full sm:w-[48%] lg:w-[31%] rounded h-[200px]">
          <h1 class="text-[18px] font-bold text-black mb-2">Christmas Catalog</h1>
          <div class="flex flex-wrap gap-1 mb-2">
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Sneakers</button>
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Boots</button>
          </div>
          <p class="text-[12px] text-gray-500">Created on 12.27.2024</p>
          <p class="text-[12px] mt-1">254 products</p>
        </div>

        <div class="bg-white border-[1px] bordercolor p-4 w-full sm:w-[48%] lg:w-[31%] rounded h-[200px]">
          <h1 class="text-[18px] font-bold text-black mb-2">A very big title for a catalog with many things</h1>
          <div class="flex flex-wrap gap-1 mb-2">
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Sneakers</button>
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Boots</button>
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Belt</button>
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">Socks</button>
            <button class="bg-background border rounded py-0.5 px-2 text-[12px]">+3</button>
          </div>
          <p class="text-[12px] text-gray-500">Created on 12.27.2024</p>
          <p class="text-[12px] mt-1">254 products</p>
        </div>

      </div>
    </div>
  </div>
</template>


<style scoped>
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-image: linear-gradient(270deg, #FF00FB, #463ADD, #FF00FB);
  background-size: 600% 600%;
  animation: gradientMove 4s ease infinite;
}
</style>