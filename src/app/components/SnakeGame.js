// "use client";
// import { useEffect, useRef, useState } from "react";
// import "../../styles/components/SnakeGame.css";

// export default function SnakeGame({ onFoodLeftChange, onGameEnd }) {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 240, height: 710 });
//   const [isRunning, setIsRunning] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [snake, setSnake] = useState([
//     { x: 100, y: 100 },
//     { x: 90, y: 100 },
//     { x: 80, y: 100 },
//   ]);
//   const [direction, setDirection] = useState({ dx: 0, dy: 0 });
//   const [foodLeft, setFoodLeft] = useState(42);

//   const size = 10;
//   const foodSize = 18; // Taille de la nourriture

//   // Met à jour la taille du jeu quand la box change de taille
//   useEffect(() => {
//     function updateSize() {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.offsetWidth,
//           height: containerRef.current.offsetHeight,
//         });
//       }
//     }
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   function generateFood() {
//     const min = 2 * size;
//     const maxX = dimensions.width - 3 * size;
//     const maxY = dimensions.height - 3 * size;
//     return {
//       x: Math.floor(Math.random() * ((maxX - min) / size + 1)) * size + min,
//       y: Math.floor(Math.random() * ((maxY - min) / size + 1)) * size + min,
//     };
//   }

//   const [food, setFood] = useState(generateFood());

//   const resetGame = () => {
//     setSnake([
//       { x: 100, y: 100 },
//       { x: 90, y: 100 },
//       { x: 80, y: 100 },
//     ]);
//     setDirection({ dx: 0, dy: 0 });
//     setFood(generateFood());
//     setGameOver(false);
//     setFoodLeft(30);
//     if (onFoodLeftChange) onFoodLeftChange(30);
//   };

//   const startGame = () => {
//     if (gameOver) resetGame();
//     setDirection({ dx: size, dy: 0 }); // Commence vers la droite
//     setIsRunning(true);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const draw = () => {
//       ctx.fillStyle = "#0f172a";
//       ctx.fillRect(0, 0, dimensions.width, dimensions.height);

//       // Dessine la nourriture
//       const foodImg = new Image();
//       foodImg.src = "/snake-food.svg";
//       foodImg.onload = () => {
//         ctx.drawImage(foodImg, food.x, food.y, foodSize, foodSize);
//       };

//       const tailLength = 4; // nombre de segments pour la queue qui rétrécit
//       snake.forEach((segment, index) => {
//         if (index === 0) {
//           // Tête : cercle
//           ctx.beginPath();
//           ctx.arc(
//             segment.x + size / 2,
//             segment.y + size / 2,
//             size / 2,
//             0,
//             2 * Math.PI
//           );
//           ctx.fillStyle = "rgba(94, 234, 212, 1)";
//           ctx.fill();
//         } else if (index >= snake.length - tailLength) {
//           // Queue : de plus en plus petite, opacité dégressive
//           const tailIndex = index - (snake.length - tailLength);
//           const minTail = 0.4; // 40% de la taille
//           const shrink = 1 - (1 - minTail) * (tailIndex / (tailLength - 1));
//           const segmentSize = size * shrink;
//           const offset = (size - segmentSize) / 2;
//           const minOpacity = 0.25;
//           const maxOpacity = 0.85;
//           const opacity = Math.max(
//             maxOpacity -
//               ((maxOpacity - minOpacity) * index) / (snake.length - 1),
//             minOpacity
//           );
//           ctx.fillStyle = `rgba(94, 234, 212, ${opacity})`;
//           ctx.fillRect(
//             segment.x + offset,
//             segment.y + offset,
//             segmentSize,
//             segmentSize
//           );
//         } else {
//           // Corps : carré taille normale, opacité dégressive
//           const minOpacity = 0.25;
//           const maxOpacity = 0.85;
//           const opacity = Math.max(
//             maxOpacity -
//               ((maxOpacity - minOpacity) * index) / (snake.length - 1),
//             minOpacity
//           );
//           ctx.fillStyle = `rgba(94, 234, 212, ${opacity})`;
//           ctx.fillRect(segment.x, segment.y, size, size);
//         }
//       });
//     };

//     draw();
//   }, [snake, food, gameOver, dimensions.width, dimensions.height, foodLeft]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isRunning) return;
//       const { dx, dy } = direction;

//       switch (e.key) {
//         case "ArrowUp":
//           if (dy === 0) setDirection({ dx: 0, dy: -size });
//           break;
//         case "ArrowDown":
//           if (dy === 0) setDirection({ dx: 0, dy: size });
//           break;
//         case "ArrowLeft":
//           if (dx === 0) setDirection({ dx: -size, dy: 0 });
//           break;
//         case "ArrowRight":
//           if (dx === 0) setDirection({ dx: size, dy: 0 });
//           break;
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [direction, isRunning]);

//   useEffect(() => {
//     if (!isRunning || gameOver) return;

//     const interval = setInterval(() => {
//       const newHead = {
//         x: snake[0].x + direction.dx,
//         y: snake[0].y + direction.dy,
//       };

//       // Collision mur
//       if (
//         newHead.x < 0 ||
//         newHead.y < 0 ||
//         newHead.x + size > dimensions.width ||
//         newHead.y + size > dimensions.height
//       ) {
//         setGameOver(true);
//         setIsRunning(false);
//         if (onGameEnd) onGameEnd(false);
//         return;
//       }

//       // Collision avec soi-même
//       for (let i = 0; i < snake.length; i++) {
//         if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
//           setGameOver(true);
//           setIsRunning(false);
//           if (onGameEnd) onGameEnd(false);
//           return;
//         }
//       }

//       const newSnake = [newHead, ...snake];

//       // Si mange (collision rectangle-rectangle, hitbox réduite)
//       const hitboxFactor = 0.8;
//       const hitboxSize = foodSize * hitboxFactor;
//       const foodBox = {
//         x: food.x + (foodSize - hitboxSize) / 2,
//         y: food.y + (foodSize - hitboxSize) / 2,
//         size: hitboxSize,
//       };
//       const snakeHead = { x: newHead.x, y: newHead.y, size: size };
//       const isColliding =
//         snakeHead.x < foodBox.x + foodBox.size &&
//         snakeHead.x + snakeHead.size > foodBox.x &&
//         snakeHead.y < foodBox.y + foodBox.size &&
//         snakeHead.y + snakeHead.size > foodBox.y;

//       if (isColliding) {
//         if (foodLeft > 1) {
//           setFood(generateFood());
//           setFoodLeft((prev) => prev - 1);
//           setSnake(newSnake);
//         } else {
//           setFoodLeft(0);
//           setSnake(newSnake);
//           setGameOver(true);
//           setIsRunning(false);
//           if (onGameEnd) onGameEnd(true);
//           return;
//         }
//       } else {
//         newSnake.pop();
//         setSnake(newSnake);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [
//     isRunning,
//     snake,
//     direction,
//     food,
//     gameOver,
//     dimensions.width,
//     dimensions.height,
//     foodLeft,
//     onGameEnd,
//   ]);

//   useEffect(() => {
//     if (onFoodLeftChange) onFoodLeftChange(foodLeft);
//   }, [foodLeft, onFoodLeftChange]);

//   return (
//     <div
//       ref={containerRef}
//       className='relative w-full h-full div-snake'
//       style={{ minHeight: 200 }}>
//       <canvas
//         ref={canvasRef}
//         width={dimensions.width}
//         height={dimensions.height}
//         className='w-full h-full rounded-md shadow-md canvas-snake'
//       />
//       {!isRunning && !gameOver && (
//         <button
//           onClick={startGame}
//           className='btn-snake'
//           style={{
//             position: "absolute",
//             left: "6vw",
//             bottom: "6vh",
//             backgroundColor: "#0F172B",
//             border: "none",
//             color: "#90A1B9",
//             fontSize: "14px",
//             cursor: "pointer",
//           }}>
//           Démarrer le jeu
//         </button>
//       )}
//       {gameOver && (
//         <div className='snake-gameover-bar'>
//           <div className='snake-gameover-message'>
//             {foodLeft === 0 ? "	GAGNÉ !" : "	PERDU "}
//           </div>
//           <button className='snake-gameover-btn btn-snake' onClick={startGame}>
//             Recommencer
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }





















"use client";
import { useEffect, useRef, useState } from "react";
import "../../styles/components/SnakeGame.css";

export default function SnakeGame({ onFoodLeftChange, onGameEnd }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 240, height: 320 }); // initial ratio 3:4
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState([
    { x: 100, y: 100 },
    { x: 90, y: 100 },
    { x: 80, y: 100 },
  ]);
  const [direction, setDirection] = useState({ dx: 0, dy: 0 });
  const [foodLeft, setFoodLeft] = useState(42);

  const size = 10;
  const foodSize = 18;

  // Met à jour dimensions en se basant sur la largeur du conteneur et ratio 3/4
  useEffect(() => {
    function updateSize() {
      requestAnimationFrame(() => {
        if (containerRef.current) {
          const width = containerRef.current.clientWidth;
          const height = width * (4 / 3); // ratio hauteur = largeur * 4/3
          setDimensions({ width, height });
        }
      });
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function generateFood() {
    const min = 2 * size;
    const maxX = dimensions.width - 3 * size;
    const maxY = dimensions.height - 3 * size;
    return {
      x: Math.floor(Math.random() * ((maxX - min) / size + 1)) * size + min,
      y: Math.floor(Math.random() * ((maxY - min) / size + 1)) * size + min,
    };
  }

  const [food, setFood] = useState(generateFood());

  const resetGame = () => {
    setSnake([
      { x: 100, y: 100 },
      { x: 90, y: 100 },
      { x: 80, y: 100 },
    ]);
    setDirection({ dx: 0, dy: 0 });
    setFood(generateFood());
    setGameOver(false);
    setFoodLeft(30);
    if (onFoodLeftChange) onFoodLeftChange(30);
  };

  const startGame = () => {
    if (gameOver) resetGame();
    setDirection({ dx: size, dy: 0 });
    setIsRunning(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      const foodImg = new Image();
      foodImg.src = "/snake-food.svg";
      foodImg.onload = () => {
        ctx.drawImage(foodImg, food.x, food.y, foodSize, foodSize);
      };

      const tailLength = 4;
      snake.forEach((segment, index) => {
        if (index === 0) {
          ctx.beginPath();
          ctx.arc(
            segment.x + size / 2,
            segment.y + size / 2,
            size / 2,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = "rgba(94, 234, 212, 1)";
          ctx.fill();
        } else if (index >= snake.length - tailLength) {
          const tailIndex = index - (snake.length - tailLength);
          const minTail = 0.4;
          const shrink = 1 - (1 - minTail) * (tailIndex / (tailLength - 1));
          const segmentSize = size * shrink;
          const offset = (size - segmentSize) / 2;
          const minOpacity = 0.25;
          const maxOpacity = 0.85;
          const opacity = Math.max(
            maxOpacity - ((maxOpacity - minOpacity) * index) / (snake.length - 1),
            minOpacity
          );
          ctx.fillStyle = `rgba(94, 234, 212, ${opacity})`;
          ctx.fillRect(
            segment.x + offset,
            segment.y + offset,
            segmentSize,
            segmentSize
          );
        } else {
          const minOpacity = 0.25;
          const maxOpacity = 0.85;
          const opacity = Math.max(
            maxOpacity - ((maxOpacity - minOpacity) * index) / (snake.length - 1),
            minOpacity
          );
          ctx.fillStyle = `rgba(94, 234, 212, ${opacity})`;
          ctx.fillRect(segment.x, segment.y, size, size);
        }
      });
    };

    draw();
  }, [snake, food, gameOver, dimensions.width, dimensions.height, foodLeft]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isRunning) return;
      const { dx, dy } = direction;

      switch (e.key) {
        case "ArrowUp":
          if (dy === 0) setDirection({ dx: 0, dy: -size });
          break;
        case "ArrowDown":
          if (dy === 0) setDirection({ dx: 0, dy: size });
          break;
        case "ArrowLeft":
          if (dx === 0) setDirection({ dx: -size, dy: 0 });
          break;
        case "ArrowRight":
          if (dx === 0) setDirection({ dx: size, dy: 0 });
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [direction, isRunning]);

  useEffect(() => {
    if (!isRunning || gameOver) return;

    const interval = setInterval(() => {
      const newHead = {
        x: snake[0].x + direction.dx,
        y: snake[0].y + direction.dy,
      };

      if (
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x + size > dimensions.width ||
        newHead.y + size > dimensions.height
      ) {
        setGameOver(true);
        setIsRunning(false);
        if (onGameEnd) onGameEnd(false);
        return;
      }

      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
          setGameOver(true);
          setIsRunning(false);
          if (onGameEnd) onGameEnd(false);
          return;
        }
      }

      const newSnake = [newHead, ...snake];

      const hitboxFactor = 0.8;
      const hitboxSize = foodSize * hitboxFactor;
      const foodBox = {
        x: food.x + (foodSize - hitboxSize) / 2,
        y: food.y + (foodSize - hitboxSize) / 2,
        size: hitboxSize,
      };
      const snakeHead = { x: newHead.x, y: newHead.y, size: size };
      const isColliding =
        snakeHead.x < foodBox.x + foodBox.size &&
        snakeHead.x + snakeHead.size > foodBox.x &&
        snakeHead.y < foodBox.y + foodBox.size &&
        snakeHead.y + snakeHead.size > foodBox.y;

      if (isColliding) {
        if (foodLeft > 1) {
          setFood(generateFood());
          setFoodLeft((prev) => prev - 1);
          setSnake(newSnake);
        } else {
          setFoodLeft(0);
          setSnake(newSnake);
          setGameOver(true);
          setIsRunning(false);
          if (onGameEnd) onGameEnd(true);
          return;
        }
      } else {
        newSnake.pop();
        setSnake(newSnake);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [
    isRunning,
    snake,
    direction,
    food,
    gameOver,
    dimensions.width,
    dimensions.height,
    foodLeft,
    onGameEnd,
  ]);

  useEffect(() => {
    if (onFoodLeftChange) onFoodLeftChange(foodLeft);
  }, [foodLeft, onFoodLeftChange]);

  return (
    <div ref={containerRef} className="div-snake">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="canvas-snake"
      />
      {!isRunning && !gameOver && (
      <button
      onClick={startGame}
      className="btn-snake"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#0F172B",
        border: "none",
        color: "#90A1B9",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      Démarrer le jeu
    </button>
    
      )}
      {gameOver && (
        <div className="snake-gameover-bar">
          <div className="snake-gameover-message">
            {foodLeft === 0 ? "GAGNÉ !" : "PERDU"}
          </div>
          <button className="snake-gameover-btn btn-snake" onClick={startGame}>
            Recommencer
          </button>
        </div>
      )}
    </div>
  );
}
