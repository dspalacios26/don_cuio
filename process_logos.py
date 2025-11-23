from PIL import Image, ImageOps
import os
import numpy as np

def process_logos():
    source_path = "public/graphic_assets/Logotipos/PNGs/Don_Cuio_Logotipos.png"
    output_dir = "src/assets/images"
    
    if not os.path.exists(source_path):
        print(f"Error: {source_path} not found")
        return

    try:
        img_original = Image.open(source_path).convert("RGBA")
        img = img_original.copy()
        
        # Create a mask of non-transparent pixels
        datas = img.getdata()
        newData = []
        for item in datas:
            if item[3] > 0:  # If not transparent
                newData.append(255)
            else:
                newData.append(0)
        
        # Crop the top-left logo (Don Cuio text)
        # Assuming the sheet layout, we'll take a crop from the top-left.
        # Coordinates estimated based on standard logo sheet layouts and the user's selection.
        # Let's crop the top 25% height and left 33% width as a starting point for the "Don Cuio" text logo.
        w, h = img.size
        # The circled logo is the first one.
        # Reducing width to 0.22 to exclude the icon on the right.
        logo_crop = img.crop((0, 0, int(w * 0.25), int(h * 0.25)))
        
        # Trim whitespace from the crop
        bbox = logo_crop.getbbox()
        if bbox:
            img = logo_crop.crop(bbox)
        else:
            # Fallback if crop is empty
            img = logo_crop

        # Resize if too huge
        if img.width > 1000:
            ratio = 1000 / img.width
            img = img.resize((1000, int(img.height * ratio)), Image.Resampling.LANCZOS)

        # Save White Version
        white_img = Image.new("RGBA", img.size)
        white_data = []
        for item in img.getdata():
            if item[3] > 0:
                white_data.append((255, 255, 255, item[3]))
            else:
                white_data.append((0, 0, 0, 0))
        white_img.putdata(white_data)
        white_img.save(f"{output_dir}/logo-white-processed.png", "PNG")
        print(f"Saved {output_dir}/logo-white-processed.png")

        # Save Green Version (#00a552 -> R:0, G:165, B:82)
        green_img = Image.new("RGBA", img.size)
        green_data = []
        for item in img.getdata():
            if item[3] > 0:
                green_data.append((0, 165, 82, item[3]))
            else:
                green_data.append((0, 0, 0, 0))
        green_img.putdata(green_data)
        green_img.save(f"{output_dir}/logo-green-processed.png", "PNG")
        print(f"Saved {output_dir}/logo-green-processed.png")

        # Save Black Version (R:0, G:0, B:0)
        black_img = Image.new("RGBA", img.size)
        black_data = []
        for item in img.getdata():
            if item[3] > 0:
                black_data.append((0, 0, 0, item[3]))
            else:
                black_data.append((0, 0, 0, 0))
        black_img.putdata(black_data)
        black_img.save(f"{output_dir}/logo-black-processed.png", "PNG")
        print(f"Saved {output_dir}/logo-black-processed.png")

        # --- Process Secondary Logo (Icon) ---
        # Crop box: (1000, 1600, 1900, 2300)
        icon_crop = img_original.crop((1000, 1600, 1900, 2300))
        icon_crop2 = img_original.crop((300, 1600, 800, 2200))
        
        # Trim whitespace
        bbox_icon = icon_crop.getbbox()
        if bbox_icon:
            icon_img = icon_crop.crop(bbox_icon)
            icon_img2 = icon_crop2.crop(bbox_icon)
        else:
            icon_img = icon_crop
            icon_img2 = icon_crop2

        # Save White Version
        icon_white = Image.new("RGBA", icon_img.size)
        white_data_icon = []
        for item in icon_img.getdata():
            if item[3] > 0:
                white_data_icon.append((255, 255, 255, item[3]))
            else:
                white_data_icon.append((0, 0, 0, 0))
        icon_white.putdata(white_data_icon)
        icon_white.save(f"{output_dir}/logo-icon-white.png", "PNG")
        print(f"Saved {output_dir}/logo-icon-white.png")

        # Save Green Version
        icon_green = Image.new("RGBA", icon_img.size)
        green_data_icon = []
        for item in icon_img.getdata():
            if item[3] > 0:
                green_data_icon.append((0, 165, 82, item[3]))
            else:
                green_data_icon.append((0, 0, 0, 0))
        icon_green.putdata(green_data_icon)
        icon_green.save(f"{output_dir}/logo-icon-green.png", "PNG")
        print(f"Saved {output_dir}/logo-icon-green.png")

        # Save Green Version 2
        icon_green2 = Image.new("RGBA", icon_img2.size)
        green_data_icon2 = []
        for item in icon_img2.getdata():
            if item[3] > 0:
                green_data_icon2.append((0, 165, 82, item[3]))
            else:
                green_data_icon2.append((0, 0, 0, 0))
        icon_green2.putdata(green_data_icon2)
        icon_green2.save(f"{output_dir}/logo-icon-green2.png", "PNG")
        print(f"Saved {output_dir}/logo-icon-green2.png")

        # Save Black Version
        icon_black = Image.new("RGBA", icon_img.size)
        black_data_icon = []
        for item in icon_img.getdata():
            if item[3] > 0:
                black_data_icon.append((0, 0, 0, item[3]))
            else:
                black_data_icon.append((0, 0, 0, 0))
        icon_black.putdata(black_data_icon)
        icon_black.save(f"{output_dir}/logo-icon-black.png", "PNG")
        print(f"Saved {output_dir}/logo-icon-black.png")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    process_logos()
