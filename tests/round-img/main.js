const fileInput = document.getElementById('fileInput');
        const uploadArea = document.querySelector('.upload-area');
        const imagePreview = document.getElementById('imagePreview');
        const roundImage = document.getElementById('roundImage');
        const sizeSlider = document.getElementById('sizeSlider');
        const sizeValue = document.getElementById('sizeValue');
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        let currentImageFile = null;

        // Eventos de drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        sizeSlider.addEventListener('input', (e) => {
            const size = e.target.value;
            sizeValue.textContent = size;
            roundImage.style.width = size + 'px';
            roundImage.style.height = size + 'px';
        });

        function handleFile(file) {
            if (!file.type.startsWith('image/')) {
                alert('Por favor selecciona un archivo de imagen.');
                return;
            }

            currentImageFile = file;
            const reader = new FileReader();
            
            reader.onload = (e) => {
                roundImage.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            
            reader.readAsDataURL(file);
        }

        function downloadImage() {
            if (!currentImageFile) return;

            const img = new Image();
            img.onload = () => {
                const size = parseInt(sizeSlider.value);
                canvas.width = size;
                canvas.height = size;

                // Limpiar canvas
                ctx.clearRect(0, 0, size, size);

                // Crear máscara circular
                ctx.beginPath();
                ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();

                // Calcular dimensiones para centrar la imagen
                const minDimension = Math.min(img.width, img.height);
                const x = (img.width - minDimension) / 2;
                const y = (img.height - minDimension) / 2;

                // Dibujar imagen centrada y recortada
                ctx.drawImage(img, x, y, minDimension, minDimension, 0, 0, size, size);

                // Descargar
                canvas.toBlob((blob) => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'imagen_redonda.png';
                    link.click();
                    URL.revokeObjectURL(link.href);
                });
            };

            img.src = roundImage.src;
        }