<template>
  <div class="button-container">
   
      <slot> </slot>
  
  </div>
</template>

<script>
export default {};
</script>

 <style lang="scss" scoped>
.button-container {
  border: 1px solid var(--pink-color);
  margin: 1em auto;
  display: flex;
  align-items: center;
  flex-direction: column;
 // width: 50%;
  padding: 10px;
  max-width: 10em;
  position: relative;
  transition: all .5s ease;
  &:before {
    content: "";
    left: 0em;
    position: absolute;
    width: 0.5em;
    height: 2.5em;
    top: -1px;
    background: var(--pink-color);
    transition: all .5s ease;
  }
  &:hover::before {
      width: 10em;
    
    background: var(--pink-color);
  }
  a {
    font-family: var(--comic-family);
    text-decoration: none;
    text-transform: capitalize;
     z-index: 100;
     color: var(--white-color);
    
  }
}
</style>